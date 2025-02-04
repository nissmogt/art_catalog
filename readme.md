# Art & Sip Catalog

This project is a web-based catalog for an Art & Sip event, showcasing artworks from various artists.

## Project Structure

The project consists of the following main files:

- `index.html`: The main HTML structure of the catalog.
- `script.js`: JavaScript file containing functions to dynamically create event intro and artwork elements.
- `styles.css`: CSS file for styling (not provided in the snippets, but referenced in `index.html`).

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository:
git clone https://github.com/nissmogt/art_catalog.git

2. Navigate to the project directory:
cd art_catalog

3. Open `index.html` in your preferred web browser.


## Viewing a Live Rendering

To view a live rendering of the project using the VS Code Live Server extension:

1. Install the Live Server extension in VS Code if you haven't already:
- Open VS Code
- Go to the Extensions view (Ctrl+Shift+X)
- Search for "Live Server"
- Click "Install" on the extension by Ritwick Dey

2. Once installed, right-click on the `index.html` file in the VS Code file explorer.

3. Select "Open with Live Server" from the context menu.

4. Your default browser should open automatically, displaying the Art & Sip Catalog.

5. The page will automatically reload if you make changes to the files.

## Project Structure

- `index.html`: Contains the main structure of the webpage.
- `script.js`: Includes functions for creating event intro and artwork elements dynamically.
- `styles.css`: Contains the styles for the webpage (not provided in the snippets).
- `static/images/`: Directory for storing artwork images (referenced in `script.js`).

## Additional Notes

- Make sure all referenced files (`styles.css`, `script.js`, and image files) are present in the correct locations relative to `index.html`.
- The project uses dynamic JavaScript to populate the event introduction and artist sections.
- Artwork images should be placed in the `static/images/` directory for the `createArtworkElement` function to work correctly.
