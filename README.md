# Project Report : Fleet Management System challenge

## Executive Summary

Our team, Ariane09, comprised of members Imad, Amir, Mounir, Rachid, and Aymen, took on the challenge of developing a Fleet Management System for military drones monitoring during the hackathon. In this report, we will present the key aspects of our project, including its functionalities, the problems it addresses, and potential future developments.

## Introduction



The Fleet Management System developed by Ariane09 (**AMUMD**: *Advance Military UAVs Monitoring Dashboard*) addresses the critical issue of efficiently managing military drones and providing decision-makers with real-time data. The need for a dashboard to monitor and explore this data is essential for effective decision-making.

## Problem Statement

The primary problem we aimed to solve is the efficient handling of data from military drones reaching the command center. Decision-makers require a user-friendly dashboard to access and explore this data seamlessly.

## Key Functionalities

### Drone Location Tracking

- The platform provides a live monitoring dashboard displaying the current locations of drones on a map.
- Users can toggle between blue and black icons to visualize drones on the map.
- Drones' states are indicated by color-coding: red (off), orange (on with warnings/alerts), and green (on with no problems).

### Map Navigation
- Users can pan and zoom on the map to view telemetry data of individual drones.
- The map offers full PAN and Zoom capabilities.

### Filtering and Searching
- The left navigation bar allows users to filter and search for specific drones.
- User-friendly design ensures ease of use.

### Drone Telemetry Data
- Double-clicking on a drone opens a sidebar displaying telemetry data alongside a live video stream.
- Users can access detailed information received from the drone and interact with the live video feed.

### Video Manipulation
- The platform offers video Manipulation tools such as zoom, filters, and AI-assisted image segmentation.
- Users can pause and resume the live video feed.

### Multi-Screen Viewing
- Users can watch multiple live drone feeds simultaneously, selecting different views.
- Flexible grid options provide customization for the layout.

### Alert System
- The platform features an alert system for critical notifications such as low battery, bad weather, and maintenance needs.
- Users can access notifications and respond promptly.

### Drone List
- The drones list page provides a list view of all drones, including their status and alerts.
- This interface enables quick access and individual drone management.

## Future Development

The implementation of our Fleet Management System presented several challenges, primarily due to time constraints and technical complexities. However, the project has vast potential for further development and enhancement:

### Advanced Video Analytics
- Implement AI models for predictive maintenance, failure detection, and object recognition within video streams.
- Enhance video quality and compression algorithms to optimize data storage and bandwidth usage.

### Geographic Information Systems (GIS) Integration
- Develop the capability to project video streams onto maps, creating a dynamic and detailed view of drone activities.
- Incorporate GIS data for improved spatial analysis and tracking.

### Historical Data Archiving
- Establish a comprehensive data storage system to archive all collected drone data, telemetry, and video streams.
- Implement data indexing and retrieval mechanisms for quick access to historical information.

### User Customization
- Provide users with the ability to customize their dashboards, layouts, and alert preferences.
- Offer advanced filtering and search options for data retrieval.

### Expanded Device Support
- Extend support to a broader range of drone models, ensuring compatibility with various hardware and communication protocols.

### Enhanced Security
- Implement robust security measures to protect sensitive data and ensure secure communication between the platform and drones.

Collaborative development with experts in fields such as AI, GIS, and cybersecurity could facilitate the realization of these enhancements.

## Conclusion

In conclusion, Ariane09's Fleet Management System successfully addressed the challenge of military drone monitoring, offering a range of essential functionalities. While time constraints and technical challenges limited the scope of our implementation, we recognize the significant potential for future development and expansion.

Our commitment to advancing this project remains unwavering. We believe that with continued dedication, collaboration, and access to additional resources, our Fleet Management System can evolve into a transformative tool for military drone monitoring and beyond. This report signifies not the end but the beginning of an exciting journey toward more advanced and innovative solutions in the field of fleet management.

## Acknowledgments

We would like to express our gratitude to the hackathon organizers for providing us with the opportunity to work on this challenging project. Additionally, we thank our team members for their dedication and hard work throughout the hackathon. Our success would not have been possible without their contributions.

## Thank You

We would like to extend our thanks to the judges and fellow participants for their attention and consideration. We are open to any questions or feedback and look forward to discussing our project further during the Q&A session.


## Appendix: How to Run the Node.js Server

To run the Fleet Management System Node.js server locally, follow these steps:

**Prerequisites:**
- Node.js and npm (Node Package Manager) installed on your machine.
- MQTT broker URL and other environment variables configured (as specified in your project).

1. **Clone the Repository:**
   Clone this GitHub repository to your local machine using the following command :
```
git clone https://github.com/lolifmaster/junction_backend
```


2. **Navigate to the Server Directory:**
Change your working directory to the server directory of the cloned repository:
```
cd your-repo-name/server
```

3. **Install Dependencies:**
Install the required Node.js packages and dependencies using npm:
```
npm install
```

4. **Set Environment Variables:**
Create a `.env` file in the server directory and set the necessary environment variables, including `MQTT_URL`. Ensure that your `.env` file looks like this:
```
MQTT_URL=your-mqtt-broker-url
PORT=3000
```

5. **Run the Server:**
Start the Node.js server by running the following command:
```
npm start
```

6. **Access the Server:**
Once the server is running, you can access it in your web browser by navigating to:
```
http://localhost:3000
```
You will see the Fleet Management System's live monitoring dashboard.

7. **Network Access:**
If you want to access the server from other devices in your network, you can use the IP address and port displayed in the console when the server starts. For example:
```
Network access via: 192.168.1.100:3000!
```

8. **Interact with the Dashboard:**
You can interact with the dashboard by exploring drone data, telemetry, and video feeds.

9. **Stop the Server:**
To stop the server, press `Ctrl + C` in the terminal where the server is running.

That's it! You've successfully set up and run the Fleet Management System Node.js server locally. You can now use it for military drone monitoring and explore its functionalities.

For any questions or issues, please refer to the project documentation or reach out to our team for assistance.
