/**
 * main.js - Interactividad para la landing page
 * FemCoders Club - Grid + Flexbox Layouts
 */

document.addEventListener('DOMContentLoaded', function() {
    // Toggle del menú móvil
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Animar las barras para formar una X
            const bars = menuToggle.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('active'));
        });
    }
    
    // Cerrar el menú al hacer clic en un enlace (para móviles)
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                
                const bars = menuToggle.querySelectorAll('.bar');
                bars.forEach(bar => bar.classList.remove('active'));
            }
        });
    });
    
    // Animación suave para enlaces de anclaje
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuste para el header fijo
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Manejo del formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí iría la lógica para enviar el formulario
            // Por ahora, solo mostramos un mensaje de éxito
            
            alert('¡Gracias por tu mensaje! Te responderemos pronto.');
            contactForm.reset();
        });
    }
    
    // Añadir clase activa a la navegación según la sección visible
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`.nav-list a[href="#${sectionId}"]`)?.classList.add('active');
            } else {
                document.querySelector(`.nav-list a[href="#${sectionId}"]`)?.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Inicializar tooltips o popovers si los hubiera
    // Aquí podrías añadir cualquier inicialización de componentes interactivos
    
    // Añadir indicadores visuales para demostrar Grid vs Flexbox (modo educativo)
    const toggleLayoutIndicators = function() {
        document.body.classList.toggle('show-layout-indicators');
        
        // Añadir/remover clase a contenedores Grid
        document.querySelectorAll('.features-grid, .examples-grid, .testimonials-grid, .pricing-grid, .contact-grid, .footer-grid').forEach(el => {
            el.classList.toggle('grid-indicator');
        });
        
        // Añadir/remover clase a contenedores Flexbox
        document.querySelectorAll('.header-container, .nav-list, .hero-buttons, .feature-card, .example-content, .testimonial-card, .pricing-card, .contact-methods').forEach(el => {
            el.classList.toggle('flex-indicator');
        });
        
        // Añadir/remover clase a contenedores que usan ambos
        document.querySelectorAll('.example-card.large, .hero-container, .site-header').forEach(el => {
            el.classList.toggle('combined-indicator');
        });
    };
    
    // Añadir botón de toggle para los indicadores
    const addLayoutToggle = function() {
        const toggleButton = document.createElement('button');
        toggleButton.innerHTML = 'Mostrar Indicadores CSS';
        toggleButton.classList.add('layout-toggle-button');
        toggleButton.addEventListener('click', function() {
            toggleLayoutIndicators();
            this.textContent = this.textContent.includes('Mostrar') ? 
                'Ocultar Indicadores CSS' : 'Mostrar Indicadores CSS';
        });
        
        // Estilo del botón
        toggleButton.style.position = 'fixed';
        toggleButton.style.bottom = '20px';
        toggleButton.style.right = '20px';
        toggleButton.style.zIndex = '999';
        toggleButton.style.padding = '10px 15px';
        toggleButton.style.backgroundColor = 'var(--color-primary)';
        toggleButton.style.color = 'white';
        toggleButton.style.border = 'none';
        toggleButton.style.borderRadius = 'var(--border-radius-md)';
        toggleButton.style.boxShadow = 'var(--shadow-md)';
        toggleButton.style.cursor = 'pointer';
        
        document.body.appendChild(toggleButton);
    };
    
    // Añadir el botón solo si estamos en modo de desarrollo
    const isDevelopment = window.location.hostname === 'localhost' || 
                          window.location.hostname === '127.0.0.1' ||
                          window.location.search.includes('debug=true');
    
    if (isDevelopment) {
        addLayoutToggle();
    }
    
    // Añadir clase 'active' para animaciones de entrada
    const addScrollAnimations = function() {
        const animatedElements = document.querySelectorAll('.feature-card, .example-card, .testimonial-card, .pricing-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // Una vez que la animación se ha ejecutado, dejar de observar
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });
        
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    };
    
    // Inicializar animaciones en scroll
    addScrollAnimations();
    
    // Código adicional para resaltar la tecnología usada al pasar el ratón
    const highlightTechnology = function() {
        // Añadir un tooltip al pasar el ratón sobre elementos
        const allSections = document.querySelectorAll('section');
        
        allSections.forEach(section => {
            section.addEventListener('mouseover', function(e) {
                // Comprobar si el elemento o sus padres usan Grid
                if (hasGridParent(e.target)) {
                    showTechTooltip(e, 'Grid');
                }
                // Comprobar si el elemento o sus padres usan Flexbox
                else if (hasFlexParent(e.target)) {
                    showTechTooltip(e, 'Flexbox');
                }
            });
            
            section.addEventListener('mouseout', function() {
                hideTechTooltip();
            });
        });
    };
    
    function hasGridParent(element) {
        let current = element;
        while (current && current !== document.body) {
            const style = window.getComputedStyle(current);
            if (style.display === 'grid') {
                return true;
            }
            current = current.parentElement;
        }
        return false;
    }
    
    function hasFlexParent(element) {
        let current = element;
        while (current && current !== document.body) {
            const style = window.getComputedStyle(current);
            if (style.display === 'flex' || style.display === 'inline-flex') {
                return true;
            }
            current = current.parentElement;
        }
        return false;
    }
    
    function showTechTooltip(event, tech) {
        // Solo mostrar el tooltip si los indicadores están activos
        if (!document.body.classList.contains('show-layout-indicators')) {
            return;
        }
        
        let tooltip = document.getElementById('tech-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'tech-tooltip';
            tooltip.style.position = 'fixed';
            tooltip.style.padding = '5px 10px';
            tooltip.style.backgroundColor = 'rgba(0,0,0,0.8)';
            tooltip.style.color = 'white';
            tooltip.style.borderRadius = '4px';
            tooltip.style.fontSize = '12px';
            tooltip.style.zIndex = '9999';
            tooltip.style.pointerEvents = 'none';
            document.body.appendChild(tooltip);
        }
        
        tooltip.textContent = tech;
        tooltip.style.left = `${event.clientX + 10}px`;
        tooltip.style.top = `${event.clientY + 10}px`;
        tooltip.style.display = 'block';
    }
    
    function hideTechTooltip() {
        const tooltip = document.getElementById('tech-tooltip');
        if (tooltip) {
            tooltip.style.display = 'none';
        }
    }
    
    // Solo activar en modo desarrollo con el parámetro tech=true
    if (window.location.search.includes('tech=true')) {
        highlightTechnology();
    }
});