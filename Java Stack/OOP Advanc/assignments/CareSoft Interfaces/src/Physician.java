import java.sql.Date;
import java.util.ArrayList;

public class Physician extends Usuario implements UsuarioCompatibleConHIPAA {
	//... IMPORTA DEFINICI�N DE CLASE...
    
	// DENTRO DE LA CLASE:    
    private ArrayList<String> patientNotes;
	
    // PARA HACER: CONSTRUCTOR QUE TOME UN ID
    // PARA HACER: �IMPLEMENTAR USUARIOCOMPATIBLECONHIPAA!
	
    public Physician(int id) {
		super(id);
	}

	public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(	
            "Fecha y hora de env�o: %s \n", date);
        report += String.format("Reportado por ID: %s\n", this.id);
        report += String.format("Nombre del paciente: %s\n", patientName);
        report += String.format("Notas: %s \n", notes);
        this.patientNotes.add(report);
    }

	@Override
	public boolean assignPin(int pin) {
		if ((pin > 1000) && (pin < 9999)) {
			this.pin = pin;
			return true;										
		}else {
			return false;	
		}
	}

	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		if (this.id.equals(confirmedAuthID)) {
			return true;
		}
		return false;
	}

    // PARA HACER: Setters y Getters
	
	public ArrayList<String> getPatientNotes() {
		return patientNotes;
	}

	public void setPatientNotes(ArrayList<String> patientNotes) {
		this.patientNotes = patientNotes;
	}
}
