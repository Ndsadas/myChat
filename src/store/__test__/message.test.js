import {
	messagesReducer,
	sendMessageWithThunk,
	getMessagesStart,
	getMessagesSuccess,
	getMessagesError
} from '../messages'

describe("message reducer", () => {
	it("send message", () => {
		const MESSAGE = { author: "User", message: "test" };

		const result = messagesReducer(
			{ messages: {} },
			sendMessageWithThunk("room", MESSAGE)
		);


		expect(result.messages.room).toBeDefined();
		expect(result.messages.room.length).toBe(1);
		expect(result.messages.room[0].author).toBe(MESSAGE.author);
	});



	describe("default", () => {
		it("default value", () => {
			const state = { test: "test" };

			const result = messagesReducer(state, {});

			expect(result).toEqual(state);
		});

		it("default state", () => {
			const result = messagesReducer();

			expect(result).toEqual(initialState);
		});
	});

	describe("get messages types", () => {
		it("start", () => {
			const result = messagesReducer(
				{ pending: false, error: "error" },
				getMessagesStart()
			);


			expect(result.pending).toBeTruthy();


			expect(result.error).toBeNull();
		});

		it("success", () => {
			const MESSAGES = "test messages";

			const result = messagesReducer(
				{ pending: true, messages: MESSAGES },
				getMessagesSuccess(MESSAGES)
			);


			expect(result.pending).toBeFalsy();

			expect(result.messages).toBe(MESSAGES);
		});

		it("error", () => {
			const ERROR = "error";

			const result = messagesReducer(
				{ pending: true, error: null },
				getMessagesError(ERROR)
			);

			expect(result.pending).toBeFalsy();

			expect(result.error).toBe(ERROR);
		});
	});
});