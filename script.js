const videos = [
    {
        title : "Episode 82 - localStorage (Part 1)",
        thumbnail: "images/thumbnail_82.png",
        uploadDate: new Date(2021, 6, 5),
        viewCount: 300,
    },
    {
        title: "Episode 85 - JSON (Part 2)",
        thumbnail: "images/thumbnail_85.png",
        uploadDate: new Date(2021, 6, 8),
        viewCount: 1000,
      },
      {
        title: "Episode 84 - JSON (Part 1)",
        thumbnail: "images/thumbnail_84.png",
        uploadDate: new Date(2021, 6, 7),
        viewCount: 200,
      },
      {
        title: "Episode 83 - localStorage (Part 2)",
        thumbnail: "images/thumbnail_83.png",
        uploadDate: new Date(2021, 6, 6),
        viewCount: 500,
      },
];

const containerTag = document.querySelector(".container");
const sortTags = document.querySelectorAll(".dropdown-item");

const updateUI = (videos) => {
    containerTag.innerHTML = "";
    videos.forEach((video) => {
        const videoTag = `
        <div class="videoContainer">
        <img src="${video.thumbnail}" class="img" >
        <h6>${video.title}</h6>
        <p>${video.uploadDate.toLocaleDateString()}</p>
        </div>
        `;
        containerTag.innerHTML += videoTag;
    });
};

sortTags.forEach((sortTag) => {
    sortTag.addEventListener("click", (event) => {
        if (event.target.id === "ascending") {
            const videosSortedByAscendingOrder = videos.sort((a, b) => a.uploadDate.getTime() - b.uploadDate.getTime());
            updateUI(videosSortedByAscendingOrder);
        } else {
            const videosSortedByDescendingOrder = videos.sort((a, b) => b.uploadDate.getTime() - a.uploadDate.getTime());
            updateUI(videosSortedByDescendingOrder);
        }
    });
});

updateUI(videos);