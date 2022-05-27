const tagSlot = document.getElementById("tags-selected");
const filters = document.getElementsByName("filter");

let tagsChecked = [];

for (let filter of filters) {
    filter.addEventListener("click", (e) => {
        const filterName = e.target.nextElementSibling.innerText;
        if (e.target.checked) {
            tagsChecked.push(filterName);
        } else {
            const currentTag = tagsChecked.indexOf(filterName);
            tagsChecked.splice(currentTag, 1);
        }
    })
}

function applyFilters() {
    tagSlot.innerText = "";
    if (tagsChecked.length) {
        for (let tag of tagsChecked) {
            tagSlot.innerText += tag + ", ";
        }
    } else {
        tagSlot.innerText = "None";
    }
}