import java.util.ArrayList;


public interface AdminCompatibleConHIPAA {
	abstract ArrayList<String> reportSecurityIncidents();
	    
	// METODOS IMPLEMENTADOS POR DEFECTO
	// SE UTILIZA PARA IMPRIMIR INCIDENTES DE SEGURIDAD 
	public default void printSecurityIncidents() {
		System.out.println(reportSecurityIncidents());
	}
	    
	// PRUEBA DE QA, PASS/FAIL DE LOS INFORMES CONTRA LOS RESULTADOS ESPERADOS DE QA
	public default boolean adminQATest(ArrayList<String> expectedIncidents) {
		if (reportSecurityIncidents().equals(expectedIncidents)) {
			System.out.println("PASS");
		}
		else {
			System.out.println("FAIL");
	    }
	    return reportSecurityIncidents().equals(expectedIncidents);
	}
}
