import { FinishReason } from "@google/genai";
import { describe, expect, it } from "vitest";
import { mapStopReason, mapStopReasonString } from "../src/api/google-shared.ts";

describe("mapStopReason", () => {
	it.each([
		[FinishReason.STOP, "stop"],
		[FinishReason.MAX_TOKENS, "length"],
		[FinishReason.BLOCKLIST, "error"],
		[FinishReason.PROHIBITED_CONTENT, "error"],
		[FinishReason.SPII, "error"],
		[FinishReason.SAFETY, "error"],
		[FinishReason.IMAGE_SAFETY, "error"],
		[FinishReason.IMAGE_PROHIBITED_CONTENT, "error"],
		[FinishReason.IMAGE_RECITATION, "error"],
		[FinishReason.IMAGE_OTHER, "error"],
		[FinishReason.RECITATION, "error"],
		[FinishReason.FINISH_REASON_UNSPECIFIED, "error"],
		[FinishReason.OTHER, "error"],
		[FinishReason.LANGUAGE, "error"],
		[FinishReason.MALFORMED_FUNCTION_CALL, "error"],
		[FinishReason.UNEXPECTED_TOOL_CALL, "error"],
		[FinishReason.NO_IMAGE, "error"],
		[FinishReason.TOO_MANY_TOOL_CALLS, "error"],
	])("maps %s to %s", (reason, expected) => {
		expect(mapStopReason(reason)).toBe(expected);
	});
});

describe("mapStopReasonString", () => {
	it.each([
		["STOP", "stop"],
		["MAX_TOKENS", "length"],
		["TOO_MANY_TOOL_CALLS", "error"],
		["SOME_UNKNOWN_REASON", "error"],
	])("maps %s to %s", (reason, expected) => {
		expect(mapStopReasonString(reason)).toBe(expected);
	});
});
