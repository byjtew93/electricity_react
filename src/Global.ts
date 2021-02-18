export abstract class Global {
	private landscapeBackgroundLink: string = "https://www.pexels.com/photo/opened-white-duct-with-wires-inside-1583656/"
	private portraitBackgroundLink: string = "https://www.pexels.com/photo/power-socket-during-construction-on-building-5691642/"
	private landscapeBackgroundLink2: string = "https://www.pexels.com/photo/open-sockets-during-repair-at-home-5691602/"

	private static _portraitBackgroundFilename: string = "portrait_background.jpg"
	private static _landscapeBackgroundFilename: string = "landscape_background.jpg"

	static get portraitBackgroundFilename(): string {
		return this._portraitBackgroundFilename
	}

	static get landscapeBackgroundFilename(): string {
		return this._landscapeBackgroundFilename
	}

	static get phoneNumberWithInd() : string {
		return "+33630231658"
	}

	static get phoneNumberParsed() : string {
		return "06 30 23 16 58"
	}

	static get housePhoneNumberWithInd() : string {
		return "+33562139271"
	}

	static get housePhoneNumberParsed(): string {
		return "05 62 13 92 71"
	}

	static get mailAddress() : string {
		return "contact@lozes-electricite.com"
	}

	static get locationAddress() : string {
		return "Toulouse, FR"
	}
}
