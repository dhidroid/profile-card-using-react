# React Flip Card UI

This project replicates a modern interactive business card with a 3D flip effect using React, styled-components, and framer-motion. The card includes a front side with a profile picture and a quote, and a back side with contact information and a QR code.

## Features

- **Interactive Flip Animation**: Smooth hover effects using `framer-motion` to rotate the card on hover.
- **Responsive Design**: Layout adapts to various screen sizes.
- **Support Button**: A button that opens the user's default email client when clicked.
- **QR Code**: Customizable QR code section.
- **Profile Picture and Contact Details**: The front side includes a profile image with a brief quote, and the back side displays contact details and a QR code.

## Preview

Here’s a demo video showing how the flip card works:

![Demo Video](./public/videos/demo.mp4)
<video width="320" height="240" controls>
  <source src="/videos/demo.mp4" type="video/mp4" />
</video>


## Getting Started

To run the project locally, follow the steps below:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### Folder Structure

Here’s an overview of the folder structure:
```code
my-project/
│
├── public/
│   ├── videos/
│   │   └── demo.mp4         # Demo video (optional)
│   ├── path-to-your-profile.jpg  # Profile image (replace with your own)
│   └── path-to-your-qr-code.png  # QR code (replace with your own)
├── src/
│   ├── App.js              # Main React component & Flip card component with animation and structure
├── node_modules/
├── package.json
└── README.md
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Dhinesh4668/react-flip-card-ui.git
   cd react-flip-card-ui
   ```
   
2. Install dependencies:
  ```bash
  npm install
  ```
3. Run the app:
```bash
  npm start
```

This will open the app in your default browser at http://localhost:3000.

Customization
To personalize the card:


---

### How to Update the File:
- Replace the demo video URL in the preview section with your actual video path.
- Replace the placeholder links (like `/path-to-your-profile.jpg`) with the correct paths to your images (profile image, QR code).
- If you want to add other sections, such as "Contributing" or "Known Issues," feel free to extend the `README.md` further.

Let me know if you need more information!


Replace /path-to-your-profile.jpg with your own profile image.
Replace /path-to-your-qr-code.png with your own QR code image.
Modify the quote, name, and contact details on the card.
  
