// universities.js - simple renderer for universities list
// Add/replace items in the `universities` array as needed or load from a JSON endpoint.

const universities = [
  {
    id: 1,
    name: "Sathyabama Institute of Science and Technology",
    city: "Chennai",
    image: "images/sathyabama.png",
    rating: 4.5,
    reviews: "2.7K",
    courses: 97,
    nirf: 53,
    start: "₹2LPA",
    url: "course-single.html"
  },
  {
    id: 2,
    name: "Sample University A",
    city: "Mumbai",
    image: "images/2.jpg",
    rating: 4.2,
    reviews: "1.3K",
    courses: 45,
    nirf: 120,
    start: "₹1.2LPA",
    url: "course-single.html"
  },
  {
    id: 3,
    name: "Sample University B",
    city: "Bangalore",
    image: "images/3.jpg",
    rating: 4.0,
    reviews: "800",
    courses: 60,
    nirf: 78,
    start: "₹1.8LPA",
    url: "course-single.html"
  }
];

function renderGrid(items) {
  const container = document.getElementById('university-grid');
  if (!container) return;
  container.innerHTML = items.map(u => `
    <li class="product">
      <div class="course-style-one-item hover-less">
        <div class="thumb">
          <img src="${u.image}" alt="${u.name}">
        </div>
        <div class="info">
          <div class="course-tags">
            <a href="#"><i class="fas fa-map-marker-alt"></i> ${u.city}</a>
            <div class="course-rating">
              ${renderStars(u.rating)}
              <span>(${u.reviews})</span>
            </div>
          </div>
          <h4><a href="${u.url}">${u.name}</a></h4>
          <div class="course-meta">
            <ul>
              <li><i class="fas fa-file-alt"></i> ${u.courses} Courses</li>
              <li><i class="fas fa-trophy"></i> #${u.nirf} NIRF Ranking</li>
            </ul>
          </div>
          <div class="bottom-meta">
            <a href="${u.url}">View Details <i class="fas fa-long-arrow-right"></i></a>
            <h2 class="pricestart">Starts from <div class="price"> ${u.start}</div></h2>
          </div>
        </div>
      </div>
    </li>
  `).join('');
}

function renderList(items) {
  const container = document.getElementById('university-list');
  if (!container) return;
  container.innerHTML = items.map(u => `
    <li class="product">
      <div class="course-style-one-item hover-less">
        <div class="thumb">
          <img src="${u.image}" alt="${u.name}">
        </div>
        <div class="info">
          <div class="top-meta">
            <div class="course-tags"><a href="#">${u.city}</a></div>
            <div class="bookmark"><a href="#"><i class="fas fa-bookmark"></i></a></div>
          </div>
          <h4><a href="${u.url}">${u.name}</a></h4>
          <div class="author">Location: ${u.city}</div>
          <div class="course-meta">
            <ul>
              <li><i class="fas fa-file-alt"></i> ${u.courses} Courses</li>
            </ul>
            <div class="course-rating">${renderStars(u.rating)} <span>(${u.reviews})</span></div>
          </div>
          <div class="bottom-meta">
            <a href="${u.url}">View Details <i class="fas fa-long-arrow-right"></i></a>
            <h2 class="price">${u.start}</h2>
          </div>
        </div>
      </div>
    </li>
  `).join('');
}

function renderStars(rating){
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let out = '';
  for(let i=0;i<full;i++) out += '<i class="fas fa-star"></i> ';
  if(half) out += '<i class="fas fa-star-half-alt"></i> ';
  const empty = 5 - full - (half?1:0);
  for(let i=0;i<empty;i++) out += '<i class="far fa-star"></i> ';
  return out;
}

function applySearch(query){
  const q = String(query||'').trim().toLowerCase();
  if(!q) return universities.slice();
  return universities.filter(u => (u.name + ' ' + u.city).toLowerCase().includes(q));
}

function initUniversities(){
  // initial render
  renderGrid(universities);
  renderList(universities);

  const input = document.getElementById('university-search');
  if(input){
    input.addEventListener('input', e => {
      const results = applySearch(e.target.value);
      renderGrid(results);
      renderList(results);
    });
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initUniversities);
} else {
  initUniversities();
}
