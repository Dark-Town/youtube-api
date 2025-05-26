# 🌟 yt-dlp API 🌟

Welcome to the **yt-dlp API**! This is a simple Flask API that allows you to download videos using the powerful yt-dlp tool.

## ⚡️ Features

- **Download Videos**: Easily download videos from various platforms.
- **Simple API**: Use a straightforward API endpoint to initiate downloads.
- **Modular Code**: Well-structured code for easy maintenance and enhancements.
- **Error Handling**: Provides meaningful error messages to guide users.

## 📦 Installation

### Prerequisites

- Python 3.6 or higher
- pip (Python package installer)

### Steps to Install

1. Clone the repository:
   
bash
   git clone https://github.com/yourusername/yt-dlp-api.git
   cd yt-dlp-api
   

2. Create a virtual environment and activate it:
   
bash
   python -m venv venv
   source venv/bin/activate  # On Windows use venvScriptsactivate
   

3. Install the required packages:
   
bash
   pip install -r requirements.txt
   

## 🚀 Usage

Run the application:
bash
python run.py

### 📡 API Endpoint

- **POST /download**

  **Request Body:**
  
json
  {
      "url": "https://www.youtube.com/watch?v=example"
  }
  

  **Response:**
  
json
  {
      "message": "Download completed",
      "title": "Video Title"
  }
  

### 🔄 Error Handling

If the URL is missing or invalid, the API will return an error message:
json
{
    "error": "URL is required"
}
```

<div style="font-size: 24px; font-weight: bold; animation: shake 0.5s infinite;">
    Amazing Features Await You!
</div>

<style>
@keyframes shake {
    0% { transform: translate(1px, 1px); }
    25% { transform: translate(-1px, -2px); }
    50% { transform: translate(-1px, 2px); }
    75% { transform: translate(1px, 2px); }
    100% { transform: translate(1px, -1px); }
}
</style>

## 🤝 Contributing

We welcome contributions! If you'd like to contribute, please fork the repository and submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Make your changes and commit them (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Open a pull request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any inquiries, please reach out to https://paidtech.zone.id.

---

Thank you for using the yt-dlp API! We hope it helps you in your video downloading needs. Happy coding! 🚀
