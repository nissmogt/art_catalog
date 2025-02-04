document.addEventListener('DOMContentLoaded', () => {
    // Updated function to create the event introduction
    function createEventIntro() {
        const eventIntro = document.getElementById('event-intro');
        
        const theme = document.createElement('h2');
        theme.classList.add('event-theme');
        theme.textContent = "An Introduction to You";

        const description = document.createElement('p');
        description.classList.add('event-description');
        description.innerHTML = `
            Welcome to our third Art & Sip, where we aim to build a vibrant local community of artists and art enthusiasts. 
            Today, we celebrate each other through artistic expression.<br><br>
            Our theme, "An Introduction to You," invites artists to share their unique perspectives and creative voices. 
            Each piece you'll see answers the question: <em>"How would you introduce someone to your art?"</em><br><br>
            As you explore the diverse works on display, you'll get a glimpse into the artistic journey of each creator. 
            This is more than just an exhibition; it's the beginning of a creative dialogue within our community.
        `;
        eventIntro.appendChild(theme);
        eventIntro.appendChild(description);
    }

    // Call the function to create the event introduction
    createEventIntro();

    const artistsContainer = document.getElementById('artists-container');
    
    fetch('artists.json')
        .then(response => response.json())
        .then(data => {
            data.artists.forEach(artist => {
                const artistSection = createArtistSection(artist);
                artistsContainer.appendChild(artistSection);
            });
        })
        .catch(error => console.error('Error loading artist data:', error));
});

function createArtistSection(artist) {
    const section = document.createElement('section');
    section.classList.add('artist-section');

    const artistInfo = document.createElement('div');
    artistInfo.classList.add('artist-info');

    // Artist photo
    const photoContainer = document.createElement('div');
    photoContainer.classList.add('artist-photo-container');

    const photoWrapper = document.createElement('div');
    photoWrapper.classList.add('artist-photo-wrapper');
    
    const photo = document.createElement('img');
    photo.src = `static/images/${artist.photo}`;
    photo.alt = `${artist.name}`;
    
    photoWrapper.appendChild(photo);
    photoContainer.appendChild(photoWrapper);

    // Artist text (name and description)
    const textContainer = document.createElement('div');
    textContainer.classList.add('artist-text');

    const name = document.createElement('h2');
    name.classList.add('artist-name');
    name.textContent = artist.name;

    const description = document.createElement('p');
    description.classList.add('artist-description');
    description.textContent = artist.description;

    const link = document.createElement('a');
    link.href = artist.link;
    link.textContent = "Check out their other work";
    link.classList.add('artist-link');
    link.target = "_blank"; // Opens link in a new tab

    textContainer.appendChild(name);
    textContainer.appendChild(description);
    textContainer.appendChild(link);

    // Combine photo and text
    artistInfo.appendChild(photoContainer);
    artistInfo.appendChild(textContainer);

    // Artworks container
    const artworksContainer = document.createElement('div');
    artworksContainer.classList.add('artist-images');

    artist.artworks.forEach(artwork => {
        const artworkElement = createArtworkElement(artwork);
        artworksContainer.appendChild(artworkElement);
    });

    section.appendChild(artistInfo);
    section.appendChild(artworksContainer);

    return section;
}

function createArtworkElement(artwork) {
    const container = document.createElement('div');
    container.classList.add('image-container');

    const wrapper = document.createElement('div');
    wrapper.classList.add('image-wrapper');

    const img = document.createElement('img');
    img.src = `static/images/${artwork.filename}`;
    img.alt = artwork.title;

    wrapper.appendChild(img);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('image-info');

    const title = document.createElement('p');
    title.classList.add('image-title');
    title.textContent = artwork.title;

    const details = document.createElement('p');
    details.classList.add('image-details');
    details.textContent = artwork.details;

    const price = document.createElement('p');
    price.classList.add('image-price');
    price.textContent = artwork.price;
    infoContainer.appendChild(title);
    infoContainer.appendChild(details);
    infoContainer.appendChild(price);
    container.appendChild(wrapper);
    container.appendChild(infoContainer);
    
    return container;
        }
