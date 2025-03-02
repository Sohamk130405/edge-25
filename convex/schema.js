import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  users: defineTable({
    name: v.string(),
    prn: v.number(),
    ticket: v.union(
      v.literal("EDGE"),
      v.literal("EDGE + MOCK GDPI"),
      v.literal("MOCK GDPI")
    ),
    email: v.string(),
  })
    .index("by_email", ["email"])
    .index("by_prn", ["prn"]),

  sessions: defineTable({
    name: v.union(
      v.literal("Workshop 1"),
      v.literal("Workshop 2"),
      v.literal("Workshop 3")
    ),
  }).index("name", ["name"]),

  attendanceRecords: defineTable({
    userId: v.string(),
    sessionId: v.string(),
  })
    .index("by_sessionId", ["sessionId"])
    .index("by_sessionId_userId", ["sessionId", "userId"]),
});

export default schema;
