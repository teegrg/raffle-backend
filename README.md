# RAFFLE APPLICATION BACKEND


## TSHERING GURUNG


### Instructions to Run the Server Locally

1. Clone the repository.
2. Install dependencies by running -- npm install
3. Start the server by running -- npm start
4. The server should now be running locally. You can access it at `http://localhost:3003` and check the health status.

### API Routes

- **GET /api/raffles**
- Description: Get all Raffles.
- **GET /api/raffles/:id**
- Description: Get a specific Raffle by its ID.
- **POST /api/raffles**
- Description: Create a new Raffle.
- **GET /api/raffles/:id/participants**
- Description: Get a specific Raffles participant.
- **POST /api/raffles/:id/participants**
- Description: create a new participant for existing Raffle.
- **GET /api/raffles/:id/winner**
- Get winner for specific raffle.

### API Methods

1. **GET /api/raffles**
- Retrieves all raffles stored in the database.
- Returns a JSON response with a status code of 200 if successful.
- Returns a JSON response with an error message and a status code of 500 if an error occurs.

2. **GET /api/raffles/:id**
- Retrieves a specific raffle by its ID.
- Validates the ID parameter to ensure it is a positive integer.
- Checks if the raffle with the specified ID exists.
- Returns a JSON response with the raffle data and a status code of 200 if successful.
- Returns a JSON response with an error message and a status code of 500 if an error occurs.

3. **POST /api/raffles**
- Creates a new raffle based on the provided data in the request body.
- Validates the input fields to ensure correct data type is filled, missing or empty.
- Returns a JSON response with the newly created raffle data and a status code of 201 if successful.
- Returns a JSON response with an error message and a status code of 500 if an error occurs.

4. **GET /api/raffles/:id/participants**
- Retrieves participants for a specific raffle.
- Validates the ID parameter to ensure it is a positive integer.
- Checks if the raffle with the specified ID exists.
- Returns a JSON response with the participants' data and a status code of 200 if successful.
- Returns a JSON response with an error message and a status code of 500 if an error occurs.

5. **POST /api/raffles/:id/participants**
- Creates a new participant for an existing raffle.
- Validates the ID parameter to ensure it is a positive integer.
- Validates the input fields to ensure correct data type is filled, missing or empty.
- Returns a JSON response with the newly created participant data and a status code of 201 if successful.
- Returns a JSON response with an error message and a status code of 500 if an error occurs.

6. **GET /api/raffles/:id/winner**
- Retrieves the winner for a specific raffle.
- Validates the ID parameter to ensure it is a positive integer.
- Checks if the raffle with the specified ID exists and has concluded.
- Returns a JSON response with the winner's data and a status code of 200 if successful.
- Returns a JSON response with an error message and a status code of 500 if an error occurs.
### Notes

- The server listens on the port specified by the `PORT` environment variable. If not specified, it defaults to port 9000.
- CORS errors in the Google Chrome web browser are prevented.
- The application is organized into controller, query, and middleware layers.
- Error handling is implemented for various scenarios, including invalid data type input, missing data, extra field other than what is required and server errors.

