# Lab 8 - Starter
Andric Li

Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

I would do it within a Github action that runs whenever code is pushed because it is automatically run no matter what. The other 2 options have a possibility of never being done.

Would you use an end to end test to check if a function is returning the correct output?

No, unit testing is better 

Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, end to end testing is better because there are more functions needed to emulate user actions

Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, checking message length is a very small function and quick to test
