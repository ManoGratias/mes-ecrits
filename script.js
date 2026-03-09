/**
 * Mes écrits - Gestion du formulaire et affichage complet
 * Projet Cloud PaaS - Vercel & Azure
 */

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-citation');
    const messageEl = document.getElementById('form-message');
    const btnAjouter = document.getElementById('btn-ajouter');
    const formulaireSection = document.getElementById('formulaire-section');

    btnAjouter.addEventListener('click', function () {
        formulaireSection.classList.add('ouvert');
        formulaireSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    document.querySelector('.btn-fermer-form').addEventListener('click', function () {
        formulaireSection.classList.remove('ouvert');
    });
    const modal = document.getElementById('modal-overlay');
    const modalTexte = document.getElementById('modal-texte');
    const modalAuteur = document.getElementById('modal-auteur');
    const modalCategorie = document.getElementById('modal-categorie');
    const modalFermer = document.querySelector('.modal-fermer');

    // Clic sur le bouton épingler → déplacer la carte
    document.querySelector('.citations').addEventListener('click', function (e) {
        const pinBtn = e.target.closest('.btn-pin');
        if (pinBtn) {
            e.preventDefault();
            e.stopPropagation();
            togglePin(pinBtn.closest('.citation-card'));
            return;
        }
    });

    // Clic sur une carte → ouvrir la modal avec le texte complet
    document.querySelector('.citations').addEventListener('click', function (e) {
        const card = e.target.closest('.citation-card');
        if (!card) return;
        if (e.target.closest('.btn-pin')) return;

        const blockquote = card.querySelector('blockquote');
        const cite = card.querySelector('cite');
        const categorieEl = card.querySelector('.categorie');

        modalTexte.textContent = blockquote ? blockquote.textContent.trim() : '';
        modalAuteur.textContent = cite ? cite.textContent.trim() : '';
        modalCategorie.textContent = categorieEl ? categorieEl.textContent : '';

        modal.classList.add('ouvert');
        modal.setAttribute('aria-hidden', 'false');
    });

    function togglePin(card) {
        const grid = document.querySelector('.citations-grid');
        const isPinned = card.classList.contains('pinned');

        if (isPinned) {
            card.classList.remove('pinned');
            const pinnedCards = grid.querySelectorAll('.citation-card.pinned');
            const insertBefore = pinnedCards.length > 0
                ? pinnedCards[pinnedCards.length - 1].nextElementSibling
                : card.nextElementSibling;
            grid.insertBefore(card, insertBefore);
            pinBtnUpdate(card, false);
        } else {
            card.classList.add('pinned');
            grid.insertBefore(card, grid.firstChild);
            pinBtnUpdate(card, true);
        }
    }

    function pinBtnUpdate(card, isPinned) {
        const btn = card.querySelector('.btn-pin');
        if (!btn) return;
        btn.textContent = isPinned ? '📍' : '📌';
        btn.title = isPinned ? 'Désépingler' : 'Épingler';
        btn.setAttribute('aria-label', isPinned ? 'Désépingler cet écrit' : 'Épingler cet écrit');
    }

    function fermerModal() {
        modal.classList.remove('ouvert');
        modal.setAttribute('aria-hidden', 'true');
    }

    modalFermer.addEventListener('click', fermerModal);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) fermerModal();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('ouvert')) fermerModal();
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const citation = document.getElementById('citation').value.trim();
        const auteur = document.getElementById('auteur').value.trim();
        const categorieSelect = document.getElementById('categorie');
        const categorie = categorieSelect.options[categorieSelect.selectedIndex].text;

        // Validation basique
        if (!citation || !auteur) {
            showMessage('Veuillez remplir tous les champs obligatoires.', 'error');
            return;
        }

        // Ajouter l'écrit dans la grille (après les épinglés)
        addCitationToPage(citation, auteur, categorie);

        showMessage(`Merci ! Ton écrit a été ajouté ci-dessus.`, 'success');

        form.reset();
        formulaireSection.classList.remove('ouvert');
    });

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function addCitationToPage(citation, auteur, categorie) {
        const grid = document.querySelector('.citations-grid');
        const card = document.createElement('article');
        card.className = 'citation-card citation-nouvelle';

        const citationFormatee = citation.startsWith('"') ? citation : '"' + citation + '"';

        card.innerHTML = `
            <button type="button" class="btn-pin" aria-label="Épingler cet écrit" title="Épingler">📌</button>
            <blockquote>${escapeHtml(citationFormatee)}</blockquote>
            <cite>— ${escapeHtml(auteur)}</cite>
            <span class="categorie">${escapeHtml(categorie)}</span>
            <span class="voir-tout">Cliquer pour voir tout le texte</span>
        `;

        const firstUnpinned = grid.querySelector('.citation-card:not(.pinned)');
        grid.insertBefore(card, firstUnpinned || null);
    }

    function showMessage(text, type) {
        messageEl.textContent = text;
        messageEl.className = 'form-message ' + type;
        messageEl.style.display = 'block';

        setTimeout(function () {
            messageEl.textContent = '';
            messageEl.className = 'form-message';
        }, 5000);
    }
});
