describe('тайтл правильный', function() {
  
  beforeEach(function(){
  	  browser.get('http://medicosm.ru');
	  browser.get('http://medicosm.ru');
  });
  it('должен быть правильный тайтл страницы', function() {
    
    expect(browser.getTitle()).toEqual('МЕДИКОСМ - косметология и медицина');
  });
  it('проверка', function(){
	
	expect(element(By.id('bodyDiv')));
  });
});


	