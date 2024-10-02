// Particle effect
const particleBg = document.getElementById('particle-bg');
const colors = ['#00ffaa', '#ff00ff', '#00ffff', '#ffff00'];

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.width = '5px';
    particle.style.height = '5px';
    particle.style.borderRadius = '50%';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
    particleBg.appendChild(particle);

    setTimeout(() => {
        particle.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
        particle.style.opacity = '0';
    }, 50);

    setTimeout(() => {
        particleBg.removeChild(particle);
    }, 1000);
}

document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) {
        createParticle(e.clientX, e.clientY);
    }
});

// Matrix-like floating tech elements effect
const floatingElements = document.getElementById('floating-elements');
const techElements = [
    '</>', '{...}', '()=>', 'npm', '#!/bin/bash', 'git push', 'docker run', 'import React', 'SELECT *', 'python3',
    '$ sudo', 'API', '404', 'JSON', 'async/await', '<div>', '&&', '|Adreno|', '===', '0101',
    'const', 'let', 'var', 'function', 'class', 'extends', 'import', 'export', 'from', 'return',
    'if', 'else', 'switch', 'case', 'for', 'while', 'do', 'break', 'continue', 'try', 'catch',
    'Promise', '.then()', '.catch()', 'fetch', 'axios', 'useState', 'useEffect', 'useContext', 'useMemo',
    'redux', 'vuex', 'ngRx', 'GraphQL', 'REST', 'SOAP', 'WebSocket', 'JWT', 'OAuth', 'bcrypt',
    'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'Kafka', 'RabbitMQ', 'Docker Compose',
    'Kubernetes', 'AWS', 'Azure', 'GCP', 'Terraform', 'Ansible', 'Jenkins', 'CircleCI', 'Travis CI',
    'Webpack', 'Babel', 'ESLint', 'Prettier', 'Jest', 'Mocha', 'Chai', 'Cypress', 'Selenium',
    'React Native', 'Flutter', 'Ionic', 'Electron', 'PWA', 'SPA', 'SSR', 'CSR', 'JAMstack',
    'Node.js', 'Express', 'Koa', 'Django', 'Flask', 'Ruby on Rails', 'Spring Boot', 'Laravel', 'ASP.NET',
    'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter',
    'git clone', 'git commit', 'git merge', 'git rebase', 'CI/CD', 'DevOps', 'Agile', 'Scrum', 'Kanban',
    'SEO', 'A11y', 'i18n', 'l10n', 'WCAG', 'ARIA', 'SSL/TLS', 'HTTPS', 'XSS', 'HireMe', 'SQL Injection'
];

function createFloatingElement() {
    const element = document.createElement('div');
    element.className = 'floating-tech-element';
    element.textContent = techElements[Math.floor(Math.random() * techElements.length)];
    element.style.left = `${Math.random() * 100}%`;
    element.style.animationDuration = `${10 + Math.random() * 20}s`;
    element.style.animationDelay = `${Math.random() * 5}s`;
    element.style.opacity = Math.random() * 0.5 + 0.1;
    
    if (Math.random() > 0.7) {
        element.classList.add('rise');
    }
    
    return element;
}

function initFloatingElements() {
    for (let i = 0; i < 100; i++) {
        floatingElements.appendChild(createFloatingElement());
    }
}

function addNewElements() {
    if (floatingElements.children.length < 200) {
        floatingElements.appendChild(createFloatingElement());
    }
    setTimeout(addNewElements, 1000);
}

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', (event) => {
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    const navLink = document.querySelectorAll(".nav-menu li a");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    // Initialize Matrix effect
    initFloatingElements();
    addNewElements();
});


//interactive trees.
document.addEventListener('DOMContentLoaded', function () {
    const circuitBoard = document.getElementById('circuit-board');
    const skills = [
        { name: "Full Stack\nDevelopment", radius: 65 },
        { name: "PHP", radius: 40 },
        { name: "MySQL", radius: 40 },
        { name: "Python", radius: 40 },
        { name: "JavaScript", radius: 40 },
        { name: "Marketing &\nAdvertising", radius: 45 },
        { name: "Logistics\nManagement", radius: 45 },
        { name: "Freelance\nServices", radius: 65 },
        { name: "Custom \nSoftware", radius: 65 }
    ];

    let bubbles = [];

    function createSkillBubble(skill) {
        const bubble = document.createElement('div');
        bubble.className = 'skill-bubble';
        bubble.style.width = `${skill.radius * 2}px`;
        bubble.style.height = `${skill.radius * 2}px`;
        bubble.innerHTML = `<span>${skill.name}</span>`;

        let x, y;
        do {
            x = Math.random() * (circuitBoard.clientWidth - skill.radius * 2);
            y = Math.random() * (circuitBoard.clientHeight - skill.radius * 2);
        } while (checkCollision(x, y, skill.radius));

        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;

        circuitBoard.appendChild(bubble);

        return { element: bubble, x, y, vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1, radius: skill.radius };
    }

    function checkCollision(x, y, radius) {
        for (let bubble of bubbles) {
            const dx = x - bubble.x;
            const dy = y - bubble.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < radius + bubble.radius) {
                return true; // Collision detected
            }
        }
        return false;
    }

    function animateBubbles() {
        const maxX = circuitBoard.clientWidth;
        const maxY = circuitBoard.clientHeight;

        bubbles.forEach(bubble => {
            bubble.x += bubble.vx;
            bubble.y += bubble.vy;

            // Boundary checking
            if (bubble.x - bubble.radius < 0 || bubble.x + bubble.radius > maxX) {
                bubble.vx *= -1;
                bubble.x = Math.max(bubble.radius, Math.min(bubble.x, maxX - bubble.radius));
            }
            if (bubble.y - bubble.radius < 0 || bubble.y + bubble.radius > maxY) {
                bubble.vy *= -1;
                bubble.y = Math.max(bubble.radius, Math.min(bubble.y, maxY - bubble.radius));
            }

            // Collision detection
            for (let otherBubble of bubbles) {
                if (bubble !== otherBubble) {
                    const dx = bubble.x - otherBubble.x;
                    const dy = bubble.y - otherBubble.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const minDistance = bubble.radius + otherBubble.radius;

                    if (distance < minDistance) {
                        // Calculate soft collision response
                        const overlap = minDistance - distance;
                        const angle = Math.atan2(dy, dx);
                        const ax = Math.cos(angle) * overlap * 0.5;
                        const ay = Math.sin(angle) * overlap * 0.5;

                        // Move bubbles apart
                        bubble.x += ax;
                        bubble.y += ay;
                        otherBubble.x -= ax;
                        otherBubble.y -= ay;

                        // Adjust velocities for smooth bounce
                        const damping = 1; // Softness factor to control the velocity transfer
                        const vxTotal = bubble.vx - otherBubble.vx;
                        const vyTotal = bubble.vy - otherBubble.vy;

                        bubble.vx -= vxTotal * damping;
                        bubble.vy -= vyTotal * damping;
                        otherBubble.vx += vxTotal * damping;
                        otherBubble.vy += vyTotal * damping;
                    }
                }
            }

            bubble.element.style.left = `${bubble.x - bubble.radius}px`;
            bubble.element.style.top = `${bubble.y - bubble.radius}px`;
        });

        requestAnimationFrame(animateBubbles);
    }

    skills.forEach(skill => {
        bubbles.push(createSkillBubble(skill));
    });

    animateBubbles();

    // Make bubbles draggable
    let isDragging = false;
    let dragTarget = null;
    let dragIndex = -1;
    let offsetX, offsetY;

    function onMouseDown(e) {
        const target = e.target.closest('.skill-bubble');
        if (target) {
            isDragging = true;
            dragTarget = target;
            dragIndex = bubbles.findIndex(bubble => bubble.element === target);
            const rect = target.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
        }
    }

    function onMouseMove(e) {
        if (isDragging && dragTarget) {
            const maxX = circuitBoard.clientWidth - dragTarget.clientWidth;
            const maxY = circuitBoard.clientHeight - dragTarget.clientHeight;
            let newX = e.clientX - circuitBoard.getBoundingClientRect().left - offsetX;
            let newY = e.clientY - circuitBoard.getBoundingClientRect().top - offsetY;

            newX = Math.max(0, Math.min(newX, maxX));
            newY = Math.max(0, Math.min(newY, maxY));

            bubbles[dragIndex].x = newX + bubbles[dragIndex].radius;
            bubbles[dragIndex].y = newY + bubbles[dragIndex].radius;
            bubbles[dragIndex].vx = 0;
            bubbles[dragIndex].vy = 0;
        }
    }

    function onMouseUp() {
        if (isDragging && dragTarget) {
            bubbles[dragIndex].vx = Math.random() * 2 - 1;
            bubbles[dragIndex].vy = Math.random() * 2 - 1;
        }
        isDragging = false;
        dragTarget = null;
        dragIndex = -1;
    }

    circuitBoard.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});



//scrit for services.

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.service-card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Check if it's a touch device
            if (window.matchMedia("(hover: none)").matches) {
                this.classList.toggle('flipped');
            }
        });

        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.classList.toggle('flipped');
            }
        });
    });

    // Handle "Learn More" button clicks
    const buttons = document.querySelectorAll('.learn-more');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            // Scroll to contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});





//contact section

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const mousePosition = { x: null, y: null };

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.size > 0.2) this.size -= 0.1;

            // Reset particle if it's too small or out of bounds
            if (this.size <= 0.2 || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }

        draw() {
            ctx.fillStyle = 'rgba(0, 255, 170, 0.8)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function createParticles() {
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // Connect particles close to mouse
            if (mousePosition.x != null && mousePosition.y != null) {
                let dx = mousePosition.x - particles[i].x;
                let dy = mousePosition.y - particles[i].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgba(0, 255, 170, 0.3)';
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mousePosition.x, mousePosition.y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateParticles);
    }

    canvas.addEventListener('mousemove', function(e) {
        mousePosition.x = e.x - canvas.offsetLeft;
        mousePosition.y = e.y - canvas.offsetTop;
    });

    canvas.addEventListener('mouseleave', function() {
        mousePosition.x = null;
        mousePosition.y = null;
    });

    createParticles();
    animateParticles();

    // Responsive canvas
    window.addEventListener('resize', function() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        particles.forEach(particle => particle.reset());
    });
});