import DariusPhoto from "./assets/Darius.webp"
import TeemoPhoto from "./assets/teemo.avif"
import YasuoPhoto from "./assets/yasuo.webp"

class Chempion {
	constructor(name, desc, img, id) {
		this.name = name;
		this.desc = desc;
		this.img = img;
		this.id = id;
	}
}

export const ChempionList = [
	new Chempion("Darius", "jest totalnym koxem i wgl", DariusPhoto, 1),
	new Chempion("teemo", "jest juz takim chomikem slodkim", TeemoPhoto, 2),
	new Chempion("yasuo", "jest takim mistrzem spinjutsu", YasuoPhoto, 3),
	new Chempion("yasuo", "jest takim mistrzem spinjutsu", YasuoPhoto, 4),
	new Chempion("yasuo", "jest takim mistrzem spinjutsu", YasuoPhoto, 5),
	new Chempion("yasuo", "jest takim mistrzem spinjutsu", YasuoPhoto, 6),
	new Chempion("yasuo", "jest takim mistrzem spinjutsu", YasuoPhoto, 7),
	new Chempion("yasuo", "jest takim mistrzem spinjutsu", YasuoPhoto, 8),
	new Chempion("yasuo", "jest takim mistrzem spinjutsu", YasuoPhoto, 9),
]
