/**
 * Mes écrits - Supabase (partagé) ou localStorage (local)
 * Projet Cloud PaaS - Vercel & Azure
 */

const DEFAULTS = [
    { id: '1', texte: 'Même lorsque toutes les portes semblent se fermer et que l\'horizon paraît sombre, il faut garder la foi. Car parfois, c\'est au cœur de l\'impasse que naît l\'espoir. Tout peut basculer en un instant, un détail peut tout changer. Tant qu\'il reste une étincelle de volonté, il existe une chance de renverser le cours des choses.', auteur: 'Hermann Gratias', categorie: 'Réflexion', pinned: false },
    { id: '2', texte: 'Un jour, je quitterai ce monde, un souffle léger,\nEt sur ton téléphone, ma photo, un écho figé.\nDes larmes naîtront, quand tu te souviendras de moi,\nJe te manquerai dans le vide, là où je ne suis plus là.\n\nQuand la solitude t\'étreindra, et que le silence s\'installera,\nTu n\'entendras plus ma voix, ni mes rires qui s\'envoleront,\nJe ne serai plus là pour te taquiner, pour partager la vie,\nMais garde ces souvenirs, ces instants d\'harmonie.\n\nAlors, savoure ma folie, ma joie de vivre éclatante,\nAvant que je ne ferme les yeux, que la lumière s\'éteigne,\nNe laisse pas le temps filer, profite de chaque instant,\nCar un jour, je partirai, et je ne reviendrai jamais.', auteur: 'Hermann- Gratias ……🙌', categorie: 'Poème', pinned: false },
    { id: '3', texte: 'Je ne sais pas comment je fais, à chaque fois que je tends l\'oreille,\nPour régler les soucis de mes amis, je me sens comme une veille.\nMa mère m\'a dit un jour, avec un sourire et un soupir,\n"Ne sois pas la psy de tout le monde", un conseil à réfléchir.\n\nMais quand je vois ceux que j\'aime, je ne peux pas m\'empêcher,\nD\'essayer de les aider, de les soutenir, de les aimer.\nC\'est comme une obligation, un besoin de leur apporter,\nUn peu de réconfort, une main tendue pour les guider.\n\nAlors je prends leurs peines, comme un fardeau partagé,\nEt dans chaque épreuve, je trouve la force de rester.\nEssayer pour eux, c\'est ma façon de montrer,\nQue l\'amitié et l\'amour, c\'est ce qui peut les sauver.', auteur: 'Hermann- Gratias ….🙌', categorie: 'Poème', pinned: false },
    { id: '4', texte: 'À toi , qui autrefois se sentait engloutie,\nDans les ténèbres d\'une vie pesante,\nSache que même les tempêtes les plus violentes,\nPeuvent laisser place à des jours ensoleillés.\n\nLes ombres ne sont que des souvenirs,\nDes leçons qui forgent notre cœur,\nAujourd\'hui, regarde la lumière qui t\'entoure,\nEt sache que chaque instant peut être un bonheur.\n\nContinue de croire en toi, en tes rêves,\nLe chemin est parsemé de beauté,\nTu as tant à offrir, tant à partager,\nEmbrasse la vie, elle t\'attend les bras ouverts.', auteur: 'Hermann-Gratias…🙌', categorie: 'Poème', pinned: false },
    { id: '5', texte: 'Oui, dans cette vie les voix résonnent,\nSi tu n\'es pas fort, la critique t\'irradie,\nAccepter les mots, c\'est un chemin à tracer,\nSinon, le bonheur s\'éteint, prêt à s\'enfuir.\n\nChaque œuvre est unique, mais peu seront célébrées,\nIl y aura toujours des regards pour désapprouver.\nRappelle-toi, tout est relatif dans cette vie,\nNe laisse pas les jugements obscurcir ton esprit.\n\nCultive ta force, ignore les murmures,\nCherche la lumière, laisse ton cœur s\'ouvrir.\nCar au-delà des doutes, des voix qui s\'opposent,\nC\'est ta vérité qui, en fin de compte, explose.', auteur: 'Hermann - Gratias……🙌', categorie: 'Poème', pinned: false },
    { id: '6', texte: 'L\'échec est orphelin mais la victoire a une famille', auteur: 'Hermann Gratias', categorie: 'Citation', pinned: false },
    { id: '7', texte: 'Lueur d\'espoir\n\nAujourd\'hui tout va mal, les nuages assombrissent le ciel,\nLes soucis s\'accumulent, comme un lourd appel.\nMais demain, s\'il plaît à Dieu, une lueur d\'espoir,\nLes vents tourneront, et le bonheur pourra voir.\n\nLes larmes d\'aujourd\'hui, comme des perles de pluie,\nS\'effaceront au soleil, laissant place à la vie.\nAvec foi et courage, on avancera,\nCar demain, s\'il plaît à Dieu, tout ira mieux, c\'est sûr…..', auteur: 'Mano_Gratias….🙌🌙', categorie: 'Poème', pinned: false },
    { id: '8', texte: 'Quand l\'absence révèle la vérité\n\nOn réalise à quel point une personne compte pour nous uniquement lorsqu\'elle n\'est plus là. Ne permets à personne d\'être une priorité dans ta vie si tu n\'es qu\'une option pour eux. Certaines personnes embellissent notre existence en y participant, tandis que d\'autres l\'améliorent en s\'en éloignant.', auteur: 'Mano_Gratias….🙌', categorie: 'Réflexion', pinned: false },
    { id: '9', texte: 'Ce message est pour toi. Toi qui traverses des moments difficiles. Toi qui te demandes combien de temps tu pourras continuer ainsi. Toi qui ressens cette solitude, cette impression d\'être invisible. Toi qui te reproches tout ce qui ne va pas. Rappelle-toi qu\'il existe des chapitres sombres, même dans les récits les plus magnifiques. Sache que tu es rempli de potentiel, que de belles choses t\'attendent encore, et que de nombreuses possibilités s\'offrent à toi. Tu as en toi la force de réussir et d\'améliorer ta vie, alors accroche-toi et continue de te battre. Chaque jour est une nouvelle occasion de faire briller ton histoire.', auteur: 'H-G…..', categorie: 'Message', pinned: false },
    { id: '10', texte: 'L\'aura ne s\'invente pas elle est inée', auteur: 'Hermann Gratias', categorie: 'Citation', pinned: false }
];

const useSupabase = window.SUPABASE_URL && window.SUPABASE_ANON_KEY &&
    !window.SUPABASE_URL.includes('REMPLACE') && !window.SUPABASE_ANON_KEY.includes('REMPLACE');

let supabaseClient = null;
if (useSupabase && typeof supabase !== 'undefined') {
    const { createClient } = supabase;
    supabaseClient = createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
}

function toEcrit(row) {
    return {
        id: row.id,
        texte: row.texte,
        auteur: row.auteur,
        categorie: row.categorie,
        pinned: row.pinned || false
    };
}

async function loadEcrits() {
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient
                .from('ecrits')
                .select('*')
                .order('pinned_at', { ascending: false, nullsFirst: false })
                .order('created_at', { ascending: false });
            if (error) throw error;
            if (data && data.length > 0) {
                return data.map(r => toEcrit(r));
            }
            await seedDefaults();
            const { data: afterSeed } = await supabaseClient.from('ecrits').select('*')
                .order('pinned_at', { ascending: false, nullsFirst: false })
                .order('created_at', { ascending: false });
            return (afterSeed || []).map(r => toEcrit(r));
        } catch (e) {
            console.error('Supabase:', e);
            return loadFromLocalStorage();
        }
    }
    return loadFromLocalStorage();
}

function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem('mes-ecrits-data');
        if (saved) {
            const data = JSON.parse(saved);
            return Array.isArray(data) && data.length > 0 ? data : DEFAULTS;
        }
    } catch (e) {}
    return DEFAULTS;
}

async function seedDefaults() {
    if (!supabaseClient) return;
    for (const d of DEFAULTS) {
        await supabaseClient.from('ecrits').insert({
            texte: d.texte,
            auteur: d.auteur,
            categorie: d.categorie,
            pinned: false
        });
    }
}

async function saveEcrit(ecrit) {
    const ecrits = loadFromLocalStorage();
    ecrits.push(ecrit);
    localStorage.setItem('mes-ecrits-data', JSON.stringify(ecrits));
}

async function updatePin(id, pinned) {
    if (supabaseClient) {
        const { error } = await supabaseClient.from('ecrits').update({
            pinned,
            pinned_at: pinned ? new Date().toISOString() : null
        }).eq('id', id);
        if (error) throw error;
        return;
    }
    const ecrits = loadFromLocalStorage();
    const e = ecrits.find(x => x.id === id);
    if (e) e.pinned = pinned;
    localStorage.setItem('mes-ecrits-data', JSON.stringify(ecrits));
}

function persistOrderFromDOM(cards) {
    const ecrits = loadFromLocalStorage();
    const orderedIds = Array.from(cards).map(c => c.dataset.id);
    const ordered = orderedIds.map(id => ecrits.find(e => e.id === id)).filter(Boolean);
    ordered.forEach((e, i) => { e.pinned = cards[i].classList.contains('pinned'); });
    localStorage.setItem('mes-ecrits-data', JSON.stringify(ordered));
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-citation');
    const messageEl = document.getElementById('form-message');
    const btnAjouter = document.getElementById('btn-ajouter');
    const formulaireSection = document.getElementById('formulaire-section');
    const grid = document.getElementById('citations-grid');
    const modal = document.getElementById('modal-overlay');
    const modalTexte = document.getElementById('modal-texte');
    const modalAuteur = document.getElementById('modal-auteur');
    const modalCategorie = document.getElementById('modal-categorie');
    const modalFermer = document.querySelector('.modal-fermer');

    btnAjouter.addEventListener('click', function () {
        formulaireSection.classList.add('ouvert');
        formulaireSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    document.querySelector('.btn-fermer-form').addEventListener('click', function () {
        formulaireSection.classList.remove('ouvert');
    });

    document.querySelector('.citations').addEventListener('click', function (e) {
        const pinBtn = e.target.closest('.btn-pin');
        if (pinBtn) {
            e.preventDefault();
            e.stopPropagation();
            togglePin(pinBtn.closest('.citation-card'));
            return;
        }
    });

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

    async function togglePin(card) {
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
        if (supabaseClient) {
            try {
                await updatePin(card.dataset.id, !isPinned);
            } catch (err) {
                console.error(err);
            }
        } else {
            persistOrderFromDOM(grid.querySelectorAll('.citation-card'));
        }
    }

    function pinBtnUpdate(card, isPinned) {
        const btn = card.querySelector('.btn-pin');
        if (!btn) return;
        btn.textContent = isPinned ? '📍' : '📌';
        btn.title = isPinned ? 'Désépingler' : 'Épingler';
        btn.setAttribute('aria-label', isPinned ? 'Désépingler cet écrit' : 'Épingler cet écrit');
    }

    function persistOrder() {
        persistOrderFromDOM(grid.querySelectorAll('.citation-card'));
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

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function createCardElement(ecrit, isNew) {
        const card = document.createElement('article');
        card.className = 'citation-card' + (isNew ? ' citation-nouvelle' : '');
        card.dataset.id = ecrit.id;
        if (ecrit.pinned) card.classList.add('pinned');
        const citationFormatee = (ecrit.texte.startsWith('"') || ecrit.texte.includes('\n')) ? ecrit.texte : '"' + ecrit.texte + '"';
        card.innerHTML = `
            <button type="button" class="btn-pin" aria-label="${ecrit.pinned ? 'Désépingler' : 'Épingler'} cet écrit" title="${ecrit.pinned ? 'Désépingler' : 'Épingler'}">${ecrit.pinned ? '📍' : '📌'}</button>
            <blockquote>${escapeHtml(citationFormatee)}</blockquote>
            <cite>— ${escapeHtml(ecrit.auteur)}</cite>
            <span class="categorie">${escapeHtml(ecrit.categorie)}</span>
            <span class="voir-tout">Cliquer pour voir tout le texte</span>
        `;
        return card;
    }

    async function renderAll() {
        grid.innerHTML = '<p class="loading">Chargement...</p>';
        const ecrits = await loadEcrits();
        grid.innerHTML = '';
        ecrits.forEach(ecrit => {
            grid.appendChild(createCardElement(ecrit, false));
        });
    }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const citation = document.getElementById('citation').value.trim();
        const auteur = document.getElementById('auteur').value.trim();
        const categorieSelect = document.getElementById('categorie');
        const categorie = categorieSelect.options[categorieSelect.selectedIndex].text;

        if (!citation || !auteur) {
            showMessage('Veuillez remplir tous les champs obligatoires.', 'error');
            return;
        }

        const citationFormatee = citation.startsWith('"') ? citation : '"' + citation + '"';
        const newEcrit = {
            id: supabaseClient ? 'temp-' + Date.now() : Date.now().toString(),
            texte: citationFormatee,
            auteur: auteur,
            categorie: categorie,
            pinned: false
        };

        try {
            if (supabaseClient) {
                const { data, error } = await supabaseClient.from('ecrits').insert({
                    texte: newEcrit.texte,
                    auteur: newEcrit.auteur,
                    categorie: newEcrit.categorie,
                    pinned: false
                }).select('id').single();
                if (error) throw error;
                if (data) newEcrit.id = data.id;
            } else {
                await saveEcrit(newEcrit);
            }
        } catch (err) {
            showMessage('Erreur lors de la sauvegarde.', 'error');
            return;
        }

        const card = createCardElement(newEcrit, true);
        const firstUnpinned = grid.querySelector('.citation-card:not(.pinned)');
        grid.insertBefore(card, firstUnpinned || null);

        showMessage(supabaseClient ? 'Merci ! Ton écrit est visible par tout le monde.' : 'Merci ! Ton écrit a été sauvegardé.', 'success');
        form.reset();
        formulaireSection.classList.remove('ouvert');
    });

    function showMessage(text, type) {
        messageEl.textContent = text;
        messageEl.className = 'form-message ' + type;
        messageEl.style.display = 'block';
        setTimeout(function () {
            messageEl.textContent = '';
            messageEl.className = 'form-message';
        }, 5000);
    }

    renderAll();
});
