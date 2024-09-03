welcomeMessage = (fullName) => () => alert(`Welcome ${fullName}`); // Acts like a getter with context
guillaume = welcomeMessage("Guillaume"); // holds the function to be called later
alex = welcomeMessage("Alex");
fred = welcomeMessage("Fred");
