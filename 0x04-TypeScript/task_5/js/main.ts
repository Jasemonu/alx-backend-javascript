// Define the MajorCredits interface with a brand property
interface MajorCredits {
  _majorBrand: unique symbol;
  credits: number;
}

// Define the MinorCredits interface with a brand property
interface MinorCredits {
  _minorBrand: unique symbol;
  credits: number;
}

// Create a function sumMajorCredits that returns MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    _majorBrand: Symbol(),
    credits: subject1.credits + subject2.credits,
  };
}

// Create a function sumMinorCredits that returns MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    _minorBrand: Symbol(),
    credits: subject1.credits + subject2.credits,
  };
}
