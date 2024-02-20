document.addEventListener('DOMContentLoaded', function() {
    var fileInput = document.getElementById('fileUpload');
    var fileSelectedSpan = document.getElementById('fileSelected');
    var analysisSelectedSpan = document.getElementById('analysisSelected');
    var uploadForm = document.getElementById('uploadForm');

    // Function to update the summary with file name
    function updateFileSummary() {
        var fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'None';
        fileSelectedSpan.textContent = fileName;
    }

    // Function to update the summary with selected analyses
    function updateAnalysisSummary() {
        var checkboxes = document.querySelectorAll('.analysis-checkbox');
        var selectedAnalyses = Array.from(checkboxes)
                                    .filter(checkbox => checkbox.checked)
                                    .map(checkbox => checkbox.value)
                                    .join(', ');
        selectedAnalyses = selectedAnalyses || 'None';
        analysisSelectedSpan.textContent = selectedAnalyses;
    }

    // Event listener for file selection
    fileInput.addEventListener('change', updateFileSummary);

    // Event listener for analysis checkbox changes
    document.querySelectorAll('.analysis-checkbox').forEach(function(checkbox) {
        checkbox.addEventListener('change', updateAnalysisSummary);
    });

    // Event listener for the form submission
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        updateFileSummary();
        updateAnalysisSummary();

        // Alert for file upload
        alert('File uploaded successfully!');

        // Reset the form and summary
        uploadForm.reset();
        fileSelectedSpan.textContent = 'None';
        analysisSelectedSpan.textContent = 'None';
    });    
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateCarousel() {
    slides.forEach(slide => {
        slide.style.transform = `translateX(${-100 * currentIndex}%)`;
    });
}

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

document.querySelector('.prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

document.querySelector('.next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});


setInterval(moveToNextSlide, 5000); 