  

        var images = [
            { index: 1, src: 'projects/ALANO_SONS_BLDG_REAL_ST.webp', name: 'ALANO & SONS BLDG- REAL ST' },
            { index: 2, src: 'projects/ANITA_UYPITCHING_BLDG.webp', name: 'ANITA UYPITCHING BLDG' },
            { index: 3, src: 'projects/UYMATIAO_TRADING_Perdices_Locsin_St.webp', name: 'UYMATIAO TRADING - Perdices- Locsin St.' },
            { index: 4, src: 'projects/UNION_DRUG_Cor_Perdices_San_Jose_St.webp', name: 'UNION DRUG- Cor Perdices- San Jose St.' },
            { index: 5, src: 'projects/CHUA_BLDG_Ma_Cristina_St.webp', name: 'CHUA BLDG - Ma. Cristina St.' },

            { index: 6, src: 'projects/CROWN_PHARMACY_PERDICES.webp', name: 'CROWN PHARMACY PERDICES' },
            { index: 7, src: 'projects/DCCCO_BLDG_STA_ROSA_ST.webp', name: 'DCCCO BLDG- STA ROSA ST.' },
            { index: 8, src: 'projects/DGTE_CHRISTIAN_SCHOOL_FINISHED_BLDG.webp', name: 'DGTE CHRISTIAN SCHOOL- FINISHED BLDG.' },
            { index: 9, src: 'projects/DORMITEL_SILLIMAN.webp', name: 'DORMITEL- SILLIMAN' },
            { index: 10, src: 'projects/DR_CHIU_BLDG_SILLIMAN.webp', name: 'DR CHIU BLDG- SILLIMAN' },

            { index: 11, src: 'projects/EBAO_BLDG_Ma_Cristina_St.webp', name: 'EBAO BLDG- Ma Cristina St.' },
            { index: 12, src: 'projects/FORMER_AVON_BLDG_Sta_Catalina_San_Jose_St.webp', name: 'FORMER AVON BLDG- Sta Catalina- San Jose St.' },
            { index: 13, src: 'projects/FORMER_EQUITABLE_BANK_STA_ROSA_ST.webp', name: 'FORMER EQUITABLE BANK- STA ROSA ST.' },
            { index: 14, src: 'projects/UMEE_PARKING_SAN_JOSE_STA_CATALINA_ST.webp', name: 'UMEE PARKING- SAN JOSE- STA CATALINA ST.' },
            { index: 15, src: 'projects/FRANCISCA_BLDG_Bantayan.webp', name: 'FRANCISCA BLDG- Bantayan' },

            { index: 16, src: 'projects/HENIA_HOTEL_PUBLIC_MARKET.webp', name: 'HENIA HOTEL- PUBLIC MARKET' },
            { index: 17, src: 'projects/HVL_BLDG_Santa_Rosa_St.webp', name: 'HVL BLDG - Santa Rosa St.' },
            { index: 18, src: 'projects/JAT_BLDG_San_Juan_St.webp', name: 'JAT BLDG - San Juan St.' },
            { index: 19, src: 'projects/LUCKY_TRADERS_ERWIN_KHO_STA_ROSA_ST.webp', name: 'LUCKY TRADERS ERWIN KHO- STA ROSA ST.' },
            { index: 20, src: 'projects/PHCCI_BLDG_SAN_JOSE_ST.webp', name: 'PHCCI BLDG- SAN JOSE ST.' },

            { index: 21, src: 'projects/PORTAL_EAST_SILLIMAN_VIEW_2.webp', name: 'PORTAL EAST- SILLIMAN ' },
            { index: 22, src: 'projects/PORTAL_WEST_SILLIMAN_VIEW_2.webp', name: 'PORTAL WEST - SILLIMAN ' },
            { index: 23, src: 'projects/QUALFON_BANTAYAN.webp', name: 'QUALFON BANTAYAN' },
            { index: 24, src: 'projects/QUALFON_LOCSIN.webp', name: 'QUALFON LOCSIN' },
            { index: 25, src: 'projects/RODNEY_HO_COMMERCIAL_BLDG_BANTAYAN.webp', name: 'RODNEY HO COMMERCIAL BLDG- BANTAYAN' },

            { index: 26, src: 'projects/ROMAN_LO_BLDG_Sibulan.webp', name: 'ROMAN LO BLDG- Sibulan' },
            { index: 27, src: 'projects/ROMAN_YAP_BLDG_BALLFIELD_SILLIMAN.webp', name: 'ROMAN YAP BLDG- BALLFIELD SILLIMAN' },
            { index: 28, src: 'projects/RURAL_BANK_OF_SIBULAN_DCDB.webp', name: 'RURAL BANK OF SIBULAN- DCDB' },
            { index: 29, src: 'projects/RUSI_BLDG_STA_ROSA_ST.webp', name: 'RUSI BLDG- STA ROSA ST.' },
            { index: 30, src: 'projects/SILLIMAN_DORM_LAGUNA.webp', name: 'SILLIMAN DORM- LAGUNA' },

            { index: 31, src: 'projects/SILLIMAN_MEDICAL_ADDITIONAL_BLDG.webp', name: 'SILLIMAN MEDICAL ADDITIONAL BLDG.' },
            { index: 32, src: 'projects/SU_CBA_BLDG_FRONT.webp', name: 'SU CBA BLDG FRONT' },
            { index: 33, src: 'projects/SU_ELEMENTARY_SCHOOL_HIBBARD_AVE.webp', name: 'SU ELEMENTARY SCHOOL- HIBBARD AVE.' },
            { index: 34, src: 'projects/TEVES_BLDG_Boulevard.webp', name: 'TEVES BLDG - Boulevard' },
            { index: 35, src: 'projects/TEVES_BLDG_COR_San_Jose_Real_sT.webp', name: 'TEVES BLDG- COR San Jose & Real sT.' },


        ];

var currentIndex;
var zoomedImageIndex = null;

function openModal(imageSrc, imageName) {
    var modal = document.querySelector('.overlayG');
    var modalImg = document.getElementById('modal-img');
    var modalName = document.getElementById('image-name');
    modalImg.src = imageSrc;
    modalName.textContent = imageName;
    modal.classList.add('active');

    console.log('Clicked image source:', imageSrc); // Log clicked image source
    console.log('Images array:', images); // Log the entire images array

    var clickedImage = images.find(img => img.src === imageSrc);
    console.log('Clicked image:', clickedImage); // Log clicked image details

    if (clickedImage) {
        currentIndex = clickedImage.index - 1; // Adjust index by subtracting 1
        console.log('Clicked image index:', currentIndex); // Log the index to the console
    } else {
        currentIndex = 0; // Default to the first image if no image is clicked
    }
    zoomedImageIndex = null; // Reset the zoomed-in photo index
}




function closeModal() {
    var modal = document.querySelector('.overlayG');
    modal.classList.remove('active');
    zoomedImageIndex = null; // Reset the zoomed-in photo index
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModal();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateModal();
}

function updateModal() {
    var currentImage = images[currentIndex];
    var modalImg = document.getElementById('modal-img');
    var modalName = document.getElementById('image-name');
    modalImg.src = currentImage.src;
    modalName.textContent = currentImage.name;

    if (zoomedImageIndex !== null) {
        zoomedImageIndex = currentIndex;
    }
}
