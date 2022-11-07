public class Gorilla extends Mammal {
	
	
	public void throwSomething(){
		energyLevel -= 5;
		System.out.println("gorilla has thrown something");
		displayEnergy();
	}
	
	public void eatBananas() {
		energyLevel += 10;
		System.out.println("the gorilla's satisfaction");
		displayEnergy();
	}
	
	public void climb() {
		energyLevel -= 10;
		System.out.println("the gorilla's satisfactionthe gorilla has climbed a tree");
		displayEnergy();
	}
}
