/*

    Handle Authentication
    Author: Aria Rahman, Siddiq Ahmad Anshori
    Title: auth
    Description: Class untuk handle authentication

**/

const auth = {
    // Daftar pengguna yang diizinkan
    users: [
        { username: 'admin', password: 'admin123', role: 'admin', name: 'Administrator' },
        { username: 'perawat', password: 'perawat123', role: 'nurse', name: 'Perawat' },
        { username: 'dokter', password: 'dokter123', role: 'doctor', name: 'Dokter' }
    ],

    // Cek apakah user sudah login
    isLoggedIn: function() {
        return localStorage.getItem('isLoggedIn') === 'true';
    },

    // Dapatkan data user yang sedang login
    getCurrentUser: function() {
        const userData = localStorage.getItem('currentUser');
        return userData ? JSON.parse(userData) : null;
    },

    // Login
    login: function(username, password) {
        const user = this.users.find(u => u.username === username && u.password === password);
        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', JSON.stringify({
                username: user.username,
                role: user.role,
                name: user.name
            }));
            return { success: true, user: user };
        }
        return { success: false, message: 'Username atau password salah!' };
    },

    // Logout
    logout: function() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        return true;
    },

    // Cek role
    hasRole: function(role) {
        const user = this.getCurrentUser();
        return user && user.role === role;
    }
};

// Inisialisasi sistem login
document.addEventListener('DOMContentLoaded', function() {
    const loginModal = document.getElementById('loginModal');
    const mainContent = document.getElementById('mainContent');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const loginError = document.getElementById('loginError');
    const currentUserSpan = document.getElementById('currentUser');

    // Cek status login saat halaman dimuat
    if (auth.isLoggedIn()) {
        // Sudah login, tampilkan konten utama
        loginModal.style.display = 'none';
        mainContent.style.display = 'block';
        const user = auth.getCurrentUser();
        if (currentUserSpan) {
            currentUserSpan.textContent = user ? user.name : 'User';
        }
        // Inisialisasi aplikasi setelah login
        if (typeof initApp === 'function') {
            initApp();
        }
    } else {
        // Belum login, tampilkan modal login
        loginModal.style.display = 'flex';
        mainContent.style.display = 'none';
    }

    // Event login
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            const username = document.getElementById('loginUsername').value.trim();
            const password = document.getElementById('loginPassword').value;
            
            if (!username || !password) {
                loginError.textContent = 'Username dan password harus diisi!';
                return;
            }
            
            const result = auth.login(username, password);
            if (result.success) {
                loginModal.style.display = 'none';
                mainContent.style.display = 'block';
                if (currentUserSpan) {
                    currentUserSpan.textContent = result.user.name;
                }
                loginError.textContent = '';
                document.getElementById('loginUsername').value = '';
                document.getElementById('loginPassword').value = '';
                
                // Inisialisasi aplikasi setelah login
                if (typeof initApp === 'function') {
                    initApp();
                }
            } else {
                loginError.textContent = result.message;
            }
        });
    }

    // Event logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            auth.logout();
            loginModal.style.display = 'flex';
            mainContent.style.display = 'none';
            // Reset AOS
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
    }

    // Enter key pada input password
    const passwordInput = document.getElementById('loginPassword');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                loginBtn.click();
            }
        });
    }
});