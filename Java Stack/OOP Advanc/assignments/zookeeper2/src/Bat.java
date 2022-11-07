public class Bat extends Mammal{
	//fly(), eatHumans(), and attackTown()
	
	int energyLevel =300;
	public int fly(){
        energyLevel -= 50;
        System.out.println(" print the sound a bat taking off and it lose some energy -> "+ energyLevel);
        return energyLevel;

    }
	
	public int eatHumans(){
        energyLevel += 25;
        System.out.println(" the so- well, never mind and it lose some energy -> "+ energyLevel);
        return energyLevel;

    }
	
	public int attackTown(){
        energyLevel -= 100;
        System.out.println(" the sound of a town on fire and it lose some energy -> "+ energyLevel);
        return energyLevel;

    }

}
