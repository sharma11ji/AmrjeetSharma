const API={baseUrl:"",apiKey:""};
const demo=[
 {title:"The Last Horizon",type:"Movie"}, {title:"Dark City",type:"Series"}, {title:"Beyond Time",type:"Movie"}, {title:"Silent Code",type:"Series"}, {title:"Red Planet",type:"Movie"}, {title:"The Unknown",type:"Series"}, {title:"Night Run",type:"Movie"}, {title:"Final Signal",type:"Series"}
];
const poster=(i)=>"https://images.unsplash.com/photo-"+["1489599849927-2ee91cede3ba","1517604931442-7e0c8ed2963c","1536440136628-849c177e76a1","1485846234645-a62644f84728","1518709268805-4e9042af9f23","1500530855697-b586d89ba3ee","1534447677768-be436bb09401","1518709594023-6eabf5a5a8d3"][i%8]+"?auto=format&fit=crop&w=500&q=80";
function render(id,items){const el=document.getElementById(id);el.innerHTML=items.map((x,i)=>'<article class="card" data-index="'+i+'" data-title="'+x.title+'"><img class="poster" src="'+poster(i)+'" alt="'+x.title+'" loading="lazy"><div class="card-title">'+x.title+'</div></article>').join('');el.querySelectorAll(".card").forEach(c=>c.onclick=()=>openModal(items[+c.dataset.index]));}
function openModal(item){document.getElementById("modalTitle").textContent=item.title;document.getElementById("modalDescription").textContent="Movie and series details will come directly from your connected API. Playback can use the authorized stream URL supplied by the API.";document.getElementById("modal").classList.add("open")}
function closeModal(){document.getElementById("modal").classList.remove("open")}
render("trending",demo);render("moviesRow",demo.filter(x=>x.type==="Movie"));render("seriesRow",demo.filter(x=>x.type==="Series"));
document.getElementById("closeModal").onclick=closeModal;document.getElementById("moreFeatured").onclick=()=>openModal(demo[0]);document.getElementById("playFeatured").onclick=()=>openModal(demo[0]);
document.getElementById("searchBtn").onclick=()=>document.getElementById("searchOverlay").classList.add("open");document.getElementById("closeSearch").onclick=()=>document.getElementById("searchOverlay").classList.remove("open");
document.getElementById("searchInput").oninput=(e)=>{const q=e.target.value.toLowerCase();const results=demo.filter(x=>x.title.toLowerCase().includes(q));render("searchResults",results)};
window.addEventListener("scroll",()=>document.querySelector(".nav").style.background=scrollY>30?"#050505ee":"linear-gradient(#050505,transparent)");
// API integration point: set API.baseUrl and implement the provider-specific mapping here without exposing secrets in GitHub.
