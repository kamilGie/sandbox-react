import DariusPhoto from "./assets/Darius.webp"
import TeemoPhoto from "./assets/teemo.avif"
import YasuoPhoto from "./assets/yasuo.webp"

class Chempion {
	constructor(name, desc, img) {
		this.name = name;
		this.desc = desc;
		this.img = img;
	}
}

export const ChempionList = [
	new Chempion("Darius", "jest totalnym koxem i wgl", DariusPhoto),
	new Chempion("teemo", "jest juz takim chomikem slodkim", TeemoPhoto),
	new Chempion("yasuo", "jest takim mistrzem spinjutsu", YasuoPhoto),
	new Chempion("yasuo", "jest takim mistrzem spinjutsu", YasuoPhoto),
	new Chempion("yasuo", "jest takim mistrzem spinjutsu", YasuoPhoto),
	new Chempion("yasuo", "jest takim mistrzem spinjutsu", YasuoPhoto),
	new Chempion("yasuo", "jest takim mistrzem spinjutsu", YasuoPhoto),
	new Chempion("yasuo", "jest takim mistrzem spinjutsu", YasuoPhoto),
	new Chempion("yasuo", "jest takim mistrzem spinjutsu", YasuoPhoto),
	new Chempion("yasuo", "jest takim mistrzem spinjutsu", YasuoPhoto),
]
