// Objek untuk menyimpan semua pengaturan profil
const profileSettings = {
  favicon: "media/1.png", // Path ke favicon
  title: "BESTSTORE | LINK", // Judul halaman
  metaTitle: "BESTSTORE | LINK", // Meta title untuk SEO
  metaDescription: "Profile Website Vynaa Valerie, Creator and Dev", // Deskripsi meta untuk SEO
  metaKeywords: "Vynaa, Vynaa Valerie, profile Vynaa, siapa Vynaa?", // Keywords meta untuk SEO
  metaRobots: "index, follow", // Pengaturan robot meta untuk SEO
  imageSrc: "media/1.png", // Path ke gambar profil
  name: "𝐁𝐄𝐒𝐓 𝐒𝐓𝐎𝐑𝐄", // Nama profil
  occupation: "𝐉𝐁 𝐓𝐑𝐔𝐒𝐓𝐄𝐃 𝐃𝐀𝐍 𝐌𝐔𝐑𝐀𝐇", // Pekerjaan atau jabatan
  links: [
    { title: "𝑮𝑪 𝑨𝑳𝑳𝑮𝑨𝑴𝑬", url: "https://chat.whatsapp.com/JAg3A1Kk5GhEPWzKlyPK5N", icon: "fa-whatsapp" }, // Tautan WhatsApp
    { title: "𝑻𝑬𝑳𝑬𝑮𝑹𝑨𝑴", url: "https://t.me/+6285810505334", icon: "fa-telegram" }, // Tautan WhatsApp
    { title: "𝑾𝑯𝑨𝑻𝑺𝑨𝑷𝑷", url: "https://wa.me/6285810505334", icon: "fa-whatsapp" }, // Tautan WhatsApp
  ]
};

// Mengatur favicon
document.getElementById('favicon').href = profileSettings.favicon;

// Mengatur judul halaman
document.getElementById('title').textContent = profileSettings.title;

// Mengatur meta tags
document.getElementById('meta-title').content = profileSettings.metaTitle;
document.getElementById('meta-description').content = profileSettings.metaDescription;
document.getElementById('meta-keywords').content = profileSettings.metaKeywords;
document.getElementById('meta-robots').content = profileSettings.metaRobots;

// Mengatur gambar profil
document.getElementById('profile-image').src = profileSettings.imageSrc;

// Mengatur nama profil
document.getElementById('profile-name').textContent = profileSettings.name;

// Mengatur teks pekerjaan atau jabatan
document.getElementById('occupation-text').textContent = profileSettings.occupation;

// Mengatur tautan-tautan
const linkBoxes = document.getElementById('link-boxes');
profileSettings.links.forEach(link => {
  // Hanya menambahkan tautan yang tidak kosong
  if (link.title && link.url) {
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.innerHTML = `<i class="fa ${link.icon}" aria-hidden="true"></i> ${link.title}`;
    linkBoxes.appendChild(linkElement);
  }
});
 
