public class Test {
	public static void main(String[] args) {
		
        Physician doctor10 = new Physician(1);
        UsuarioAdmin roseTyler = new UsuarioAdmin(2, "Acompa�ante");
        UsuarioAdmin donnaNoble = new UsuarioAdmin(3, "Acompa�ante");
        
        
       // Pruebas de implementaci�n de M�dico
        System.out.println("\n========= Pruebas M�dico ==========\n");
        String pinTest1 = doctor10.assignPin(42)? "FAIL" : "PASS";
        System.out.printf("Pin de m�dico asignado prueba 1: %s\n", pinTest1);
        
        String pinTest2 = doctor10.assignPin(4000)? "PASS" : "FAIL";
        System.out.printf("Pin de m�dico asignado prueba 2: %s\n", pinTest2);
        
        String authTest1 = doctor10.accessAuthorized(1234)? "FAIL" : "PASS";
        System.out.printf("Autenticaci�n m�dico prueba 1: %s\n", authTest1);
        
        String authTest2 = doctor10.accessAuthorized(1)? "PASS" : "FAIL";
        System.out.printf("Autenticaci�n m�dico prueba 2: %s\n", authTest2);
        
        // Pruebas de implementaci�n de UsuarioAdmin
        System.out.println("\n========== Pruebas UsuarioAdmin ==========\n");
        String pinTest3 = roseTyler.assignPin(42)? "FAIL" : "PASS";
        System.out.printf("Pin de administrador asignado prueba 1: %s\n", pinTest3);
        
        String pinTest4 = roseTyler.assignPin(424242)? "PASS" : "FAIL";
        System.out.printf("Pin de administrador asignado prueba 2: %s\n", pinTest4);
        
        String authTest3 = roseTyler.accessAuthorized(1234)? "FAIL" : "PASS";
        System.out.printf("Autenticaci�n administrador prueba 1: %s\n", authTest3);
        
        String authTest4 = roseTyler.accessAuthorized(1234)? "FAIL" : "PASS";
        System.out.printf("Autenticaci�n administrador prueba 1: %s\n", authTest4);
        
        String authTest5 = roseTyler.accessAuthorized(2)? "PASS" : "FAIL";
        System.out.printf("Autenticaci�n administrador prueba 2: %s\n\n", authTest5);
        
        donnaNoble.accessAuthorized(42);
        donnaNoble.accessAuthorized(4321);
        donnaNoble.accessAuthorized(7);
        donnaNoble.accessAuthorized(28);
        
        System.out.println(donnaNoble.reportSecurityIncidents());
	}
}
