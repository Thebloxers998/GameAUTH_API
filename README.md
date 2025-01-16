# NinjaMail

NinjaMail is an unfinished API database designed for authentication and registration. With NinjaMail, you can manage user authentication and registration processes efficiently.

## Features

- **User Authentication**: Securely authenticate users with ease.
- **User Registration**: Register new users and manage their information.
- **API Endpoints**: Access various endpoints for authentication and registration tasks.
- **Custom Protocol**: Use the `nmail://` protocol for secure communication.

## Installation

To install NinjaMail, follow these steps:

### On Desktop

1. **Clone the Repository**: Visit the NinjaMail GitHub repository and clone it to your local machine.
   - Open your web browser and navigate to the [NinjaMail GitHub repository](https://github.com/Thebloxers998/ninjamail).
   - Click on the "Code" button and select "Download ZIP" to download the repository as a ZIP file.
   - Extract the ZIP file to a folder on your computer.

2. **Navigate to the Project Directory**: Open your file explorer and navigate to the extracted project directory.

3. **Install the Dependencies**: Use a package manager like npm to install the project dependencies.

### On Mobile (Without Terminal)

1. **Download a File Manager App**: Install a file manager app from your app store. Some popular options are [ES File Explorer](https://play.google.com/store/apps/details?id=com.estrongs.android.pop) for Android and [Documents by Readdle](https://apps.apple.com/us/app/documents-by-readdle/id364901807) for iOS.

2. **Download the Repository**: Open your mobile browser and go to the NinjaMail GitHub repository: [NinjaMail GitHub](https://github.com/Thebloxers998/ninjamail). Tap on the "Code" button and select "Download ZIP" to download the repository as a ZIP file.

3. **Extract the ZIP File**: Use the file manager app to navigate to the downloaded ZIP file and extract its contents to a folder on your device.

4. **Upload to Cloud-Based Development Environment**: Use a cloud-based development environment like [Repl.it](https://repl.it/) or [Glitch](https://glitch.com/). Sign up for an account and create a new project.

5. **Upload the Project Files**: Upload the extracted NinjaMail project files to your cloud-based development environment.

6. **Install Dependencies**: In the cloud-based development environment, use the built-in terminal to install the project dependencies.

7. **Start the Server**: Start the NinjaMail server in the cloud-based development environment.

The server will start, and you can access the NinjaMail interface by navigating to the provided URL in your mobile web browser.

## Usage

To start the NinjaMail server, follow these steps:

1. **Start the Server**: Use your package manager to start the server.

2. **Access the Interface**: The server will start on `http://localhost:3000` or something i dont know. You can access the NinjaMail interface by navigating to this URL in your web browser.

## API Endpoints

NinjaMail provides the following API endpoints:

- **POST /api/register**: Register a new user.
  - **Request Body**: 
    ```json
    {
      "username": "exampleUser",
      "password": "examplePassword",
      "email": "user@example.com"
    }
    ```
  - **Response**: 
    ```json
    {
      "message": "User registered successfully",
      "userId": "12345"
    }
    ```

- **GET /api/login**: Authenticate a user.
  - **Query Parameters**: 
    - `username`: The username of the user.
    - `password`: The password of the user.
  - **Response**: 
    ```json
    {
      "message": "User authenticated successfully",
      "token": "abcdef123456"
    }
    ```

- **GET /api/users**: Retrieve a list of all registered users.
  - **Response**: 
    ```json
    [
      {
        "userId": "12345",
        "username": "exampleUser",
        "email": "user@example.com"
      },
      {
        "userId": "67890",
        "username": "anotherUser",
        "email": "another@example.com"
      }
    ]
    ```

- **DELETE /api/users/:id**: Delete a specific user by ID.
  - **Response**: 
    ```json
    {
      "message": "User deleted successfully"
    }
    ```

## Configuration

You can configure NinjaMail by editing the `config.js` file in the project directory. This file contains settings for the email server, database, and other parameters. Here are some key configuration options:

- **Server Port**: The port on which the NinjaMail server will run.
  ```javascript
  module.exports = {
    port: 3000,
    // Other configuration options
  };
  ```

- **Database Connection**: The connection string for the database used by NinjaMail.
  ```javascript
  module.exports = {
    dbConnectionString: 'mongodb://localhost:27017/ninjamail',
    // Other configuration options
  };
  ```

## Contributing

We welcome contributions to NinjaMail! If you'd like to contribute, please follow these steps:

1. **Fork the Repository**: Fork the NinjaMail repository on GitHub to your own account.

2. **Create a New Branch**: Create a new branch for your feature or bugfix.

3. **Make Your Changes**: Make your changes and commit them with clear and descriptive messages.

4. **Push Your Changes**: Push your changes to your forked repository.

5. **Create a Pull Request**: Create a pull request to the main NinjaMail repository.

## License

NinjaMail is licensed under the  MPL-2.0 license. See the [LICENSE](LICENSE) file for more information.

## Contact

If you have any questions or need further assistance, feel free to contact us at support@ninjamail.com.
