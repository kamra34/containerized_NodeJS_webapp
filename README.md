# Weight Tracker Application

Weight Tracker is a simple web application that allows users to input their personal information, track their weight by date, and calculate their Body Mass Index (BMI). The application is built using HTML, CSS, and JavaScript, with Bootstrap and jQuery for styling and interactivity.

## Features

- Responsive design for different device sizes
- User inputs for name, age, height, weight, and date
- Sliders for age and weight input
- Weight history table with BMI calculation
- Profile image placeholder
- Editable user information

## Prerequisites

The application runs inside a container, so there's no need to install Node.js locally. You'll need the following software installed on your system:

- [Docker](https://docs.docker.com/get-docker/)

## Setup

1. Clone the repository:

git clone https://github.com/yourusername/weight-tracker.git
cd weight-tracker

2. Build the Docker image:
docker build -t weight-tracker .

3. Run the Docker container:
docker run -p 3000:3000 --name weight-tracker-app weight-tracker


4. Open your browser and visit `http://localhost:3000`.

## Usage

Enter your name, age, height, weight, and date using the provided form. The weight history table will update with the new data and calculate your BMI based on your height and weight.

You can edit your personal information by clicking the "Edit" button below your name, age, and height.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
