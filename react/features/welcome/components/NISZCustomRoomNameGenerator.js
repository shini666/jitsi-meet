export function generateRandomRoomNameNISZ() {
    const randomWords = [
        'Első', 'Második', 'Harmadik', 'Negyedik', 'Ötödik', 'Hatodik',
        'Eltöröl',
        'Hozzáférés', 'Elhelyezés', 'Kísér', 'Elvégre', 'Fiók',
        'Felhalmoz', 'Vádol', 'Elér', 'Elfogad', 'Megszerez', 'Cselekedj',
        'Aktiválás', 'Hozzáadás', 'Cím', 'Betartás', 'Beállítás', 'Adminisztrálás',
        'Csodálom', 'Elfogad', 'Hirdet', 'Tanács',
        'Kor', 'Egyetért', 'Cél', 'Riasztás',
        'Figyelmeztet', 'Igazít', 'Engedélyez', 'Módosítás', 'Módosítás',
        'Összeg', 'Elemez', 'Bejelentés', 'Bosszú', 'Válasz', 'Előre',
        'Elnézést', 'Fellebbezés', 'Megjelenik', 'Taps', 'Jelentkezés', 'Kinevezés',
        'Értékelés', 'Közelítés', 'Jóváhagyás', 'Érvelés', 'Felkel', 'Karol', 'Elrendezés',
        'Letartóztatás', 'Érkezés', 'Kérdezz', 'Aszpirin',
        'Összerak', 'Hozzárendel', 'Asszisztál', 'Társ',
        'Elér', 'Kísérlet', 'Részvétel',
        'Vonzás', 'Tulajdonság', 'Engedélyezés', 'Átlagos', 'Kerül', 'Várakozás',
        'Díj', 'Vissza', 'Sütés', 'Egyenleg', 'Bár', 'Alap', 'Denevér',
        'Csata', 'Légy', 'Medve', 'Ver', 'Válj', 'Könyörögj', 'Kezdj', 'Viselkedj', 'Elárul', 'Licit',
        'Lélegezz', 'Tenyészt', 'Hozd', 'Kiadás', 'Ecset', 'Építs', 'Ég',
        'Vásárlás', 'Számítás', 'Hívás', 'Nyugodt', 'Tábor', 'Kampány',
        'Mégse', 'Rögzítés', 'Gondoskodik', 'Vigye', 'Vágj',
        'Ok', 'Szünet', 'Ünnepelj', 'Központ', 'Lánc', 'Szék', 'Kihívás',
        'Igénylés', 'Tisztázni', 'Osztályozás', 'Tisztítás', 'Törlés', 'Kattints', 'Mássz',
        'Gyűjtse', 'Harc', 'Kombinálás', 'Gyere', 'Kényelem', 'Parancs',
        'Pizza', 'Hamburger', 'Gyros', 'Kávé', 'Tea', 'Palacsinta', 'Konferencia',
        'Sör', 'Bor', 'Pálinka'

    ]

    let randomString = ""
    for(let i = 0; i < 5; i++){
        const random = Math.ceil(Math.random()*randomWords.length-1)
        randomString += randomWords[random]
    }

    return randomString
}
