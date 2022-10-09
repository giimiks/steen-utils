import { IntelligibilityLevel, SlavicLanguage } from '../types';

export class IntelligibilityAssessment {
  public tag: SlavicLanguage;
  public level: IntelligibilityLevel;
  public autogenerated: boolean;

  constructor(
    tag: SlavicLanguage,
    level = IntelligibilityLevel.Unknown,
    autogenerated = true,
  ) {
    this.tag = tag;
    this.level = level;
    this.autogenerated = autogenerated;
  }

  toString(): string {
    if (this.level === IntelligibilityLevel.Unknown) {
      return '';
    }

    return `${this.autogenerated ? '!' : ''}${this.tag}${this.level}`;
  }
}

export class IntelligibilityReport
  implements Readonly<Record<SlavicLanguage, IntelligibilityAssessment>>
{
  private _data: Record<SlavicLanguage, IntelligibilityAssessment> = {
    be: new IntelligibilityAssessment(SlavicLanguage.Belarusian),
    bg: new IntelligibilityAssessment(SlavicLanguage.Bulgarian),
    bs: new IntelligibilityAssessment(SlavicLanguage.Bosnian),
    cnr: new IntelligibilityAssessment(SlavicLanguage.Montenegrin),
    cs: new IntelligibilityAssessment(SlavicLanguage.Czech),
    csb: new IntelligibilityAssessment(SlavicLanguage.Kashubian),
    cu: new IntelligibilityAssessment(SlavicLanguage.ChurchSlavonic),
    dsb: new IntelligibilityAssessment(SlavicLanguage.LowerSorbian),
    hr: new IntelligibilityAssessment(SlavicLanguage.Croatian),
    hsb: new IntelligibilityAssessment(SlavicLanguage.UpperSorbian),
    mk: new IntelligibilityAssessment(SlavicLanguage.Macedonian),
    pl: new IntelligibilityAssessment(SlavicLanguage.Polish),
    ru: new IntelligibilityAssessment(SlavicLanguage.Russian),
    rue: new IntelligibilityAssessment(SlavicLanguage.Rusyn),
    sk: new IntelligibilityAssessment(SlavicLanguage.Slovak),
    sl: new IntelligibilityAssessment(SlavicLanguage.Slovenian),
    sr: new IntelligibilityAssessment(SlavicLanguage.Serbian),
    szl: new IntelligibilityAssessment(SlavicLanguage.Silesian),
    uk: new IntelligibilityAssessment(SlavicLanguage.Ukrainian),
  };

  get be(): IntelligibilityAssessment {
    return this._data.be;
  }

  get bg(): IntelligibilityAssessment {
    return this._data.bg;
  }

  get bs(): IntelligibilityAssessment {
    return this._data.bs;
  }

  get cnr(): IntelligibilityAssessment {
    return this._data.cnr;
  }

  get cs(): IntelligibilityAssessment {
    return this._data.cs;
  }

  get csb(): IntelligibilityAssessment {
    return this._data.csb;
  }

  get cu(): IntelligibilityAssessment {
    return this._data.cu;
  }

  get dsb(): IntelligibilityAssessment {
    return this._data.dsb;
  }

  get hr(): IntelligibilityAssessment {
    return this._data.hr;
  }

  get hsb(): IntelligibilityAssessment {
    return this._data.hsb;
  }

  get mk(): IntelligibilityAssessment {
    return this._data.mk;
  }

  get pl(): IntelligibilityAssessment {
    return this._data.pl;
  }

  get ru(): IntelligibilityAssessment {
    return this._data.ru;
  }

  get rue(): IntelligibilityAssessment {
    return this._data.rue;
  }

  get sk(): IntelligibilityAssessment {
    return this._data.sk;
  }

  get sl(): IntelligibilityAssessment {
    return this._data.sl;
  }

  get sr(): IntelligibilityAssessment {
    return this._data.sr;
  }

  get szl(): IntelligibilityAssessment {
    return this._data.szl;
  }

  get uk(): IntelligibilityAssessment {
    return this._data.uk;
  }

  toString(): string {
    return Object.values(this._data).map(String).filter(Boolean).join(' ');
  }

  toJSON(): Record<SlavicLanguage, IntelligibilityAssessment> {
    return this._data;
  }
}
