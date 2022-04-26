describe('Testing Registration function', function() {
  var id = Math.floor((Math.random()*100) + 1); 

  it('it should register account', function() {
    browser.get('http://localhost:4200/register');
    browser.waitForAngularEnabled(true);
    browser.sleep(3000);
    element(by.name("username")).sendKeys("admin"+id);
    browser.sleep(2000);
    element(by.name("email")).sendKeys("admin"+id+"@mail.to");
    browser.sleep(2000);
    element(by.name("password")).sendKeys("password123");
    browser.sleep(2000);
    element(by.buttonText("Sign Up")).click();
    browser.sleep(2000);
    var getPrompt = element.all(by.css(".alert-success")).getText();
    expect(getPrompt).toMatch("Your registration is successful!");
  });

  it('it should check database records',async function() {
    browser.waitForAngularEnabled(false);
    await browser.get('http://localhost/phpmyadmin/index.php');
    await browser.sleep(3000);
    await element(by.cssContainingText('li.database > .hover_show_full', 'main_db')).click();
    await browser.sleep(5000);
    await element(by.cssContainingText('li.database > .list_container > ul > li > .hover_show_full', 'users')).click();
    await browser.sleep(5000);
  });
});
