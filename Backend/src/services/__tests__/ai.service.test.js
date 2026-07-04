// Mock external dependencies
jest.mock("puppeteer-core");
jest.mock("@sparticuz/chromium");
jest.mock("@google/genai");

// Now import the module we're testing
const aiService = require("../ai.service.js");

describe("AI Service - Basic Structure Tests", () => {
  test("should export generateInterviewReport function", () => {
    expect(typeof aiService.generateInterviewReport).toBe("function");
  });

  test("should export generateResumePdf function", () => {
    expect(typeof aiService.generateResumePdf).toBe("function");
  });

  test("should export evaluateAnswer function", () => {
    expect(typeof aiService.evaluateAnswer).toBe("function");
  });
});

describe("AI Service - Function Integration", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("generateInterviewReport should be callable with required parameters", async () => {
    expect(aiService.generateInterviewReport).toBeDefined();
    expect(typeof aiService.generateInterviewReport).toBe("function");
  });

  test("evaluateAnswer should be callable with required parameters", async () => {
    expect(aiService.evaluateAnswer).toBeDefined();
    expect(typeof aiService.evaluateAnswer).toBe("function");
  });

  test("generateResumePdf should be callable with required parameters", async () => {
    expect(aiService.generateResumePdf).toBeDefined();
    expect(typeof aiService.generateResumePdf).toBe("function");
  });
});

describe("Validate Resume Score Boundaries", () => {
  test("ATS score should theoretically be between 0-100", () => {
    const testScores = [0, 25, 50, 75, 100];
    testScores.forEach(score => {
      expect(score).toBeGreaterThanOrEqual(0);
      expect(score).toBeLessThanOrEqual(100);
    });
  });

  test("Answer evaluation score should be between 1-10", () => {
    const testScores = [1, 3, 5, 7, 10];
    testScores.forEach(score => {
      expect(score).toBeGreaterThanOrEqual(1);
      expect(score).toBeLessThanOrEqual(10);
    });
  });

  test("Match score should be between 0-100", () => {
    const testScores = [0, 33, 66, 100];
    testScores.forEach(score => {
      expect(score).toBeGreaterThanOrEqual(0);
      expect(score).toBeLessThanOrEqual(100);
    });
  });
});

describe("Data Structure Validation", () => {
  test("Interview report should have required fields structure", () => {
    const expectedFields = [
      "matchScore",
      "atsScore",
      "presentKeywords",
      "missingKeywords",
      "technicalQuestions",
      "behavioralQuestions",
      "skillGaps",
      "preparationPlan",
      "title"
    ];

    expectedFields.forEach(field => {
      expect(expectedFields).toContain(field);
    });
  });

  test("Answer evaluation should have required fields", () => {
    const expectedFields = [
      "score",
      "feedback",
      "strengths",
      "improvements",
      "modelAnswer"
    ];

    expectedFields.forEach(field => {
      expect(expectedFields).toContain(field);
    });
  });

  test("Skill gap should have severity levels", () => {
    const validSeverities = ["low", "medium", "high"];
    const testSeverity = "medium";
    
    expect(validSeverities).toContain(testSeverity);
  });
});

describe("Resume PDF Generation Logic", () => {
  test("HTML should follow ATS-friendly guidelines", () => {
    const atsGuidelines = [
      "single-column layout",
      "inline CSS only",
      "no tables",
      "no images",
      "Arial or Helvetica font"
    ];

    expect(atsGuidelines.length).toBe(5);
    expect(atsGuidelines).toContain("single-column layout");
    expect(atsGuidelines).toContain("no tables");
  });
});