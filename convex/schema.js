import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  users: defineTable({
    name: v.optional(v.string()),
    ticket: v.union(
      v.literal("Ticket 1"),
      v.literal("Ticket 2"),
      v.literal("Ticket 3")
    ),
    year: v.optional(
      v.union(
        v.literal("First"),
        v.literal("Second"),
        v.literal("Third"),
        v.literal("Fourth")
      )
    ),
    email: v.optional(v.string()),
    phone: v.optional(v.string()),
  }).index("email", ["email"]),
});

export default schema;
