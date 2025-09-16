document.addEventListener('DOMContentLoaded', () => {

    const mainButtons = document.querySelector('.main-buttons');
    const homeSection = document.querySelector('.home-section');
    const sections = {
        'film-content': document.getElementById('film-content'),
        'agenda-content': document.getElementById('agenda-content'),
        'pengumuman-content': document.getElementById('pengumuman-content'),
    };
    
    // Fungsi untuk menampilkan konten yang dipilih
    function showSection(sectionId) {
        // Sembunyikan semua bagian konten
        Object.values(sections).forEach(section => {
            section.classList.add('hidden');
        });
        // Tampilkan hanya bagian yang dipilih
        if (sections[sectionId]) {
            sections[sectionId].classList.remove('hidden');
        }
        mainButtons.classList.add('hidden');
        homeSection.classList.add('hidden');
    }

        });
    }

    // Tambahkan event listener untuk tombol Film & TV
    document.getElementById('film-btn').addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah halaman reload
        showSection('film-content');
        loadFilms();
    });

    // Tambahkan event listener untuk tombol Home
    document.querySelector('nav ul li:first-child a').addEventListener('click', (event) => {
        event.preventDefault();
        // Sembunyikan semua konten dan tampilkan kembali konten Home
        Object.values(sections).forEach(section => {
            section.classList.add('hidden');
        });
        mainButtons.classList.remove('hidden');
        homeSection.classList.remove('hidden');
    });

});
