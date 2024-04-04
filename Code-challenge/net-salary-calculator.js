// Solution for net Salary Calculator

// PAYE rates
const payeRates = {
    24000: 10,
    32333: 25,
    500000: 30,
    800000: 32.5,
    Infinity: 35,
  };
  
  // NHIF Deductions
  const nhifDeductions = {
    5999: 150,
    7999: 300,
    11999: 400,
    14999: 500,
    19999: 600,
    24999: 750,
    29999: 850,
    34999: 900,
    39999: 950,
    44999: 1000,
    49999: 1100,
    59999: 1200,
    69999: 1300,
    79999: 1400,
    89999: 1500,
    99999: 1600,
    Infinity: 1700,
  };
  
  // NSSF Deductions
  const nssfTier1Limit = 7000;
  const nssfTier2Limit = 36000;
  const nssfRate = 0.06;
  
  // Function to calculate PAYE (Tax)
  function calculatePayee(salary) {
    let payee = 0;
    for (const [threshold, rate] of Object.entries(payeRates)) {
      if (salary <= parseFloat(threshold)) {
        payee += (salary - (parseFloat(threshold) / 100)) * (rate / 100);
        break;
      } else {
        payee += (parseFloat(threshold) / 100) * (rate / 100);
      }
    }
    return payee;
  }
  
  // Function to calculate NHIF deductions
  function calculateNHIF(salary) {
    for (const [threshold, deduction] of Object.entries(nhifDeductions)) {
      if (salary <= parseFloat(threshold)) {
        return deduction;
      }
    }
    return nhifDeductions[99999]; // Maximum deduction
  }
  
  // Function to calculate NSSF deductions
  function calculateNSSF(salary) {
    let nssf = 0;
    if (salary <= nssfTier1Limit) {
      nssf += salary * nssfRate;
    } else if (salary <= nssfTier2Limit) {
      nssf += nssfTier1Limit * nssfRate;
      nssf += (salary - nssfTier1Limit) * nssfRate;
    } else {
      nssf += nssfTier1Limit * nssfRate;
      nssf += (nssfTier2Limit - nssfTier1Limit) * nssfRate;
    }
    return nssf;
  }
  
  // Function to calculate gross salary
  function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits;
  }
  
  // Function to calculate net salary
  function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = calculateGrossSalary(basicSalary, benefits);
    const payee = calculatePayee(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const netSalary = grossSalary - payee - nhif - nssf;
    return netSalary;
  }
  
  // Prompt user for inputs
  const basicSalary = parseFloat(prompt("Enter basic salary: "));
  const benefits = parseFloat(prompt("Enter benefits: "));
  
  // Calculate and print results
  const netSalary = calculateNetSalary(basicSalary, benefits);
  console.log(`Net Salary: ${netSalary.toFixed(2)}`);
  