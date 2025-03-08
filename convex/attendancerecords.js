import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import { query } from "./_generated/server";
const populateUser = async (ctx, userId) => {
  return await ctx.db.get(userId);
};

export const getBySessionName = query({
  args: { sessionName: v.string() },
  handler: async (ctx, { sessionName }) => {
    const authUserId = await getAuthUserId(ctx);
    if (!authUserId) return [];

    const session = await ctx.db
      .query("sessions")
      .withIndex("name", (q) => q.eq("name", sessionName))
      .unique();
    if (!session) return [];

    let attendanceRecords = await ctx.db
      .query("attendanceRecords")
      .withIndex("by_sessionId", (q) => q.eq("sessionId", session.name))
      .collect();
    attendanceRecords = await Promise.all(
      attendanceRecords.map(async (record) => {
        const user = await populateUser(ctx, record.userId);
        return {
          ...record,
          user,
        };
      })
    );

    return attendanceRecords;
  },
});

export const create = mutation({
  args: { prn: v.number(), sessionId: v.string() },
  handler: async (ctx, { prn, sessionId }) => {
    const authUserId = await getAuthUserId(ctx);
    if (!authUserId) throw new Error("Unauthorized");

    const user = await ctx.db
      .query("users")
      .withIndex("by_prn", (q) => q.eq("prn", prn))
      .unique();

    if (!user) throw new Error("User not found");

    if (sessionId !== "Day 3" && !user.ticket.includes("EDGE"))
      throw new Error("Unauthorized Access");
    if (sessionId === "Day 3" && !user.ticket.includes("MOCK"))
      throw new Error("Unauthorized Access");

    const session = await ctx.db
      .query("sessions")
      .withIndex("name", (q) => q.eq("name", sessionId))
      .unique();
    if (!session) throw new Error("Session not found");

    const existingRecord = await ctx.db
      .query("attendanceRecords")
      .withIndex("by_sessionId_userId", (q) =>
        q.eq("sessionId", sessionId).eq("userId", user._id)
      )
      .first();

    if (existingRecord) throw new Error("Attendance already marked");

    const attendanceId = await ctx.db.insert("attendanceRecords", {
      userId: user._id,
      sessionId,
    });

    return attendanceId;
  },
});
