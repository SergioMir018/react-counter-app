describe('Test in dome.test.js', () => { 
  test("Should be equals strings", () => {
		const message1 = "Hello World";
		const message2 = `Hello World`;

		expect(message1).toBe(message2);
	});
})



