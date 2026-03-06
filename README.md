[features.html](https://github.com/user-attachments/files/25799450/features.html)[contact.html](https://github.com/user-attachments/files/25799447/contact.html)

<!DOCTYPE html>
<html>
<head>
<title>Contact Zaiko</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<header>
<h1>Contact</h1>
<a href="index.html">Home</a>[Uploading feat
body{
font-family:Arial;
margin:0;
background:#f5f7fb;
color:#333;
}

header{
background:#111827;
color:white;
padding:20px 40px;
display:flex;
justify-content:space-between;
align-items:center;
}

nav a{
color:white;
margin-left:20px;
text-decoration:none;
}

.hero{
background:linear-gradient(135deg,#4f46e5,#6366f1);
color:white;
text-align:center;
padding:120px 20px;
}

.cta{
background:white;
color:#4f46e5;
padding:14px 28px;
display:inline-block;
margin-top:25px;
border-radius:8px;
text-decoration:none;
font-weight:bold;
}

.section{
padding:60px 20px;
text-align:center;
}

.grid{
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:25px;
margin-top:30px;
}

.card{
background:white;
padding:25px;
border-radius:10px;
box-shadow:0 8px 20px rgba(0,0,0,0.08);
width:220px;
}

.price{
font-size:28px;
margin:10px 0;
}

canvas{
background:white;
border-radius:10px;
margin-top:20px;
box-shadow:0 8px 20px rgba(0,0,0,0.08);
}
[style.css](https://github.com/user-attachments/files/25799459/style.css)
ures.h
<!DOCTYPE html>[index.html](https://github.com/user-attachments/files/25799451/index.html)
<!DOCTYPE html>[pricing.html](https://github.com/us
const switcher=document.getElementById("currencySwitch");
if(switcher){
const prices=document.querySelectorAll(".price");

switcher.addEventListener("change",function(){
let currency=this.value;

prices.forEach(price=>{
if(price.dataset.usd){
if(currency==="usd"){price.innerText="$"+price.dataset.usd}
if(currency==="inr"){price.innerText="₹"+price.dataset.inr}
}
});
});
}

const canvas=document.getElementById("chart");
if(canvas){
const ctx=canvas.getContext("2d");

const data=[200,400,350,500,650,700];

ctx.beginPath();
ctx.moveTo(0,300-data[0]);

for(let i=1;i<data.length;i++){
ctx.lineTo(i*100,300-data[i]);
}

ctx.stroke();
}
[script.js](https://github.com/user-attachments/files/25799457/script.js)
er-attachments/files/25799454/pricing.html)
<!DOCTYPE html>
<html>
<head>
<title>Zaiko Pricing</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<header>
<h1>Pricing</h1>
<a href="index.html">Home</a>
</header>

<section class="section">

<label>Select Currency:</label>
<select id="currencySwitch">
<option value="usd">$ USD</option>
<option value="inr">₹ INR</option>
</select>

<div class="grid">

<div class="card">
<h3>Starter</h3>
<div class="price" data-usd="10" data-inr="920">$10</div>
<p>Sales Tracking</p>
<p>Basic Analytics</p>
</div>

<div class="card">
<h3>Business</h3>
<div class="price" data-usd="25" data-inr="2300">$25</div>
<p>Advanced Analytics</p>
<p>Owner Dashboard</p>
</div>

<div class="card">
<h3>Enterprise</h3>
<div class="price">Custom</div>
<p>Full Platform</p>
<p>AI Assistant</p>
</div>

</div>

</section>

<script src="script.js"></script>

</body>
</html>


<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Zaiko | Business Intelligence Platform</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<header>
<h1>Zaiko</h1>
<nav>
<a href="index.html">Home</a>
<a href="features.html">Features</a>
<a href="dashboard.html">Dashboard Demo</a>
<a href="pricing.html">Pricing</a>
<a href="contact.html">Contact</a>
</nav>
</header>

<section class="hero">
<h2>Run Your Business With Real‑Time Insights</h2>
<p>Zaiko automatically records sales, revenue, and expenses while generating powerful analytics to help businesses grow faster.</p>
<a class="cta" href="dashboard.html">See Live Dashboard</a>
</section>

<section class="section">
<h2>What Zaiko Does</h2>
<div class="grid">

<div class="card">
<h3>Sales Tracking</h3>
<p>Automatically track daily sales and income from employees.</p>
</div>

<div class="card">
<h3>Analytics</h3>
<p>Understand profit, revenue, and performance with visual graphs.</p>
</div>

<div class="card">
<h3>AI Assistant</h3>
<p>Get instant insights and help directly from the built‑in assistant.</p>
</div>

</div>
</section>

<footer>
<p>© 2026 Zaiko</p>
</footer>

</body>
</html>


<html>
<head>
<title>Zaiko Features</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<header>
<h1>Zaiko</h1>
<nav>
<a href="index.html">Home</a>
<a href="features.html">Features</a>
<a href="dashboard.html">Dashboard Demo</a>
<a href="pricing.html">Pricing</a>
<a href="contact.html">Contact</a>
</nav>
</header>

<section class="section">
<h2>Powerful Features</h2>

<div class="grid">

<div class="card">
<h3>Employee Sales Entry</h3>
<p>Employees enter sales data once and Zaiko records everything automatically.</p>
</div>

<div class="card">
<h3>Owner Dashboard</h3>
<p>Owners can view real‑time performance, revenue, and profit.</p>
</div>

<div class="card">
<h3>Currency Switching</h3>
<p>Switch between USD ($) and INR (₹).</p>
</div>

<div class="card">
<h3>Analytics Graphs</h3>
<p>Understand trends using visual charts and statistics.</p>
</div>

</div>

</section>

</body>
</html>
tml…]()

</header>

<section class="section">

<h2>Get in Touch</h2>

<p>Email: support@zaikoapp.com</p>
<p>Phone: +91 00000 00000</p>[dashboard.html](https://github.com/user-attachments/files/25799448/dashboard.html)
<!DOCTYPE html>
<html>
<head>
<title>Zaiko Dashboard Demo</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<header>
<h1>Zaiko Dashboard Demo</h1>
<a href="index.html">Home</a>
</header>

<section class="section">

<h2>Business Overview</h2>

<div class="grid">

<div class="card">
<h3>Total Revenue</h3>
<p>$12,430</p>
</div>

<div class="card">
<h3>Net Profit</h3>
<p>$4,280</p>
</div>

<div class="card">
<h3>Monthly Sales</h3>
<p>320 Orders</p>
</div>

</div>

<h2 style="margin-top:40px;">Analytics Preview</h2>

<canvas id="chart" width="600" height="300"></canvas>

</section>

<script src="script.js"></script>

</body>
</html>



</section>

</body>
</html>
