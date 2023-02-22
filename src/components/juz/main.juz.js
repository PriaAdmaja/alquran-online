import { React } from "react"
import CardJuz from "./card.juz"

const Juz = () => {

  return (
    <div>
      <center className="mt-4 mb-4">
        <h3>Daftar Juz</h3>
      </center>
      <div className="mt-5 d-flex flex-wrap gap-3 justify-content-around">
        <CardJuz juz="1" info="Al-Fatihah(1) - Al-Baqarah(141)" />
        <CardJuz juz="2" info="Al-Baqarah(142) - Al-Baqarah(252)" />
        <CardJuz juz="3" info="Al-Baqarah(253) - Ali 'Imran(92)" />
        <CardJuz juz="4" info="Ali 'Imran(93) - An-Nisa'(23)" />
        <CardJuz juz="5" info="An-Nisa'(24) - An-Nisa'(147)" />
        <CardJuz juz="6" info="An-Nisa'(148) - Al-Ma'idah(81)" />
        <CardJuz juz="7" info="Al-Ma'idah(82) - Al-An'am(110)" />
        <CardJuz juz="8" info="Al-An'am(111) - Al-A'raf(87)" />
        <CardJuz juz="9" info="Al-A'raf(88) - Al-Anfal(40)" />
        <CardJuz juz="10" info="Al-Anfal(41) - At-Taubah(92)" />
        <CardJuz juz="11" info="At-Taubah(93) - Hud(5)" />
        <CardJuz juz="12" info="Hud(6) - Yusuf(52)" />
        <CardJuz juz="13" info="Yusuf(53) - Ibrahim(52)" />
        <CardJuz juz="14" info="Al-Hijr(1) - An-Nahl(128)" />
        <CardJuz juz="15" info="Al-Isra'(1) - Al-Kahf(74)" />
        <CardJuz juz="16" info="Al-Kahf(75) - Taha(135)" />
        <CardJuz juz="17" info="Al-Anbiya'(1) - Al-Hajj(78)" />
        <CardJuz juz="18" info="Al-Mu'minun(1) - Al-Furqan(20)" />
        <CardJuz juz="19" info="Al-Furqan(21) - An-Naml(55)" />
        <CardJuz juz="20" info="An-Naml(56) - Al-'Ankabut(45)" />
        <CardJuz juz="21" info="Al-'Ankabut(46) - Al-Ahzab(30)" />
        <CardJuz juz="22" info="Al-Ahzab(31) - Yasin(27)" />
        <CardJuz juz="23" info="Yasin(28) - Az-Zumar(31)" />
        <CardJuz juz="24" info="Az-Zumar(32) - Fussilat(46)" />
        <CardJuz juz="25" info="Fussilat(47) - Al-Jasiyah(37)" />
        <CardJuz juz="26" info="Al-Ahqaf(1) - Az-Zariyat(30)" />
        <CardJuz juz="27" info="Az-Zariyat(31) - Al-Hadid(29)" />
        <CardJuz juz="28" info="Al-Mujadalah(1) - At-Tahrim(12)" />
        <CardJuz juz="29" info="Al-Mulk(1) - Al-Mursalat(50)" />
        <CardJuz juz="30" info="An-Naba'(1) - An-Nas(6)" />

      </div>
    </div>
  )
}

export default Juz