describe('Testing Form Validations', function() {
  var id = Math.floor((Math.random()*100) + 1); 

  it('it should check register forms as required',async function() {
    await browser.get('http://localhost:4200/register');
    await browser.waitForAngularEnabled(true);
    await browser.sleep(3000);
    await element(by.buttonText("Sign Up")).click();
    await browser.sleep(2000);
    const username = element.all(by.css(".form-group:nth-child(1) > .alert-danger")).getText();
    const email = element.all(by.css(".form-group:nth-child(2) > .alert-danger")).getText();
    const password = element.all(by.css(".form-group:nth-child(3) > .alert-danger")).getText();
    expect(username).toMatch("Username is required").toBe(false);
    expect(email).toMatch("Email is required").toBe(false);
    expect(password).toMatch("Password is required").toBe(false);   
  });

  it('it should check login forms as required', function() {
    browser.get('http://localhost:4200/login');
    browser.waitForAngularEnabled(true);
    browser.sleep(3000);
    element(by.buttonText("Login")).click();
    browser.sleep(2000);
    const username = element.all(by.css(".form-group:nth-child(1) > .alert-danger")).getText();
    const password = element.all(by.css(".form-group:nth-child(2) > .alert-danger")).getText();
    expect(username).toMatch("Username is required");
    expect(password).toMatch("Password is required");
  });

  it('it should check validations', function() {
    browser.get('http://localhost:4200/register');
    browser.waitForAngularEnabled(true);
    browser.sleep(3000);

    browser.sleep(2000);
    element(by.name("username")).sendKeys('ad');
    browser.sleep(2000);
    element(by.name("email")).sendKeys('ad');
    browser.sleep(2000);
    element(by.name("password")).sendKeys('ad');
    element(by.buttonText("Sign Up")).click();
    
    const username = element.all(by.css(".form-group:nth-child(1) > .alert-danger")).getText();
    const email = element.all(by.css(".form-group:nth-child(2) > .alert-danger")).getText();
    const password = element.all(by.css(".form-group:nth-child(3) > .alert-danger")).getText();

    expect(username).toMatch("Username must be at least 3 characters");
    expect(email).toMatch("Email must be a valid email address");
    expect(password).toMatch("Password must be at least 6 characters");
  });
});
