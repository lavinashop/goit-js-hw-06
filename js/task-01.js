
const elemCount  = document.querySelectorAll(".item");
console.log(`Number of categories: ${elemCount.length} `);

for (let i = 0; i < elemCount.length; i++) {
    const element = elemCount[i].querySelector("h2").textContent;
    console.log("Category:" + element);
    const allElement = elemCount[i].querySelectorAll("li")
    console.log(`Elements: ${allElement.length}`)
}
