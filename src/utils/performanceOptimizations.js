// Performance optimization utilities

// Debounce function for scroll events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Check if device prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Check if device is mobile
export const isMobileDevice = () => {
  return window.innerWidth <= 768 || 
         /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Optimized animation variants for mobile
export const getOptimizedVariants = (isMobile = false) => ({
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: isMobile ? 0.1 : 0.3,
        staggerChildren: isMobile ? 0.05 : 0.15
      }
    }
  },
  item: {
    hidden: { 
      y: isMobile ? 10 : 20, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: isMobile ? 0.3 : 0.5,
        ease: "easeOut"
      }
    }
  }
});

// Lazy load images
export const lazyLoadImage = (imgElement) => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    imageObserver.observe(imgElement);
  } else {
    // Fallback for older browsers
    imgElement.src = imgElement.dataset.src;
  }
};

// Performance monitor
export class PerformanceMonitor {
  constructor() {
    this.startTime = performance.now();
    this.metrics = {};
  }
  
  mark(name) {
    this.metrics[name] = performance.now() - this.startTime;
  }
  
  measure(name, startMark, endMark) {
    const duration = this.metrics[endMark] - this.metrics[startMark];
    console.log(`${name}: ${duration.toFixed(2)}ms`);
    return duration;
  }
  
  logMetrics() {
    console.log('Performance Metrics:', this.metrics);
  }
}

// Throttle function for resize events
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};
