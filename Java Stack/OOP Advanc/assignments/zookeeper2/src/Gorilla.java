public class Gorilla extends Mammal {
    
    public int throwSomething(){
        energyLevel -= 5;
        System.out.println(" gorilla has thrown something and it lose some energy -> "+ energyLevel);
        return energyLevel;

    }
    public int eatBananas(){
        energyLevel += 10;
        System.out.println(" The gorilla's eating and satisfaction and it gain some energy-> " + energyLevel);
        
        return energyLevel;


    }

    public int climb(){
        energyLevel -= 10;
        System.out.println("  the gorilla has climbed a tree and it lose some energy-> " + energyLevel);
        return energyLevel;

    }

}