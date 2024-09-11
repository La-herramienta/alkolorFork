import TitleSection from "@/components/TitleSection";

const PoliticaPrivacidad = () => {
  return (
    <div className="bg-gray-50 w-full h-full">
      <TitleSection title={`Política de Privacidad`} image="/BannerLegal.jpg" />

      <div className="container max-w-4xl mx-auto px-4 py-8">
        <p className="text-xl font-semibold mb-4">INTRODUCCIÓN</p>
        <p className="mb-4">
          ALKOLOR , domiciliada en Ibagué - tolima, comunica a sus grupos de
          interés la actualización de su Política de Protección de Datos
          Personales, en conformidad con la Ley 1581 de 2012, el Decreto 1377 de
          2013, y demás normativas aplicables.
        </p>

        <p className="text-xl font-semibold mb-4">
          POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES
        </p>
        <p className="mb-4">
          La Compañía se compromete a proteger la privacidad de sus usuarios y a
          cumplir con las leyes y regulaciones en materia de protección de datos
          personales. Esta política describe cómo recogemos, utilizamos,
          almacenamos y protegemos los datos personales que nos proporcionan.
        </p>

        <p className="font-semibold mb-2">Dato Personal:</p>
        <p className="mb-4">
          Cualquier información vinculada o que pueda asociarse a una o varias
          personas naturales determinadas o determinables.
        </p>

        <p className="font-semibold mb-2">Base de Datos:</p>
        <p className="mb-4">
          Conjunto organizado de datos personales que sea objeto de tratamiento.
        </p>

        <p className="font-semibold mb-2">Autorización:</p>
        <p className="mb-4">
          Consentimiento expreso, previo e informado del titular del dato
          personal para llevar a cabo el tratamiento.
        </p>

        <p className="font-semibold mb-2">Tratamiento:</p>
        <p className="mb-4">
          Operaciones o actividades que se pueden realizar con los datos
          personales, tales como la recolección, uso, almacenamiento,
          transferencia, transmisión o supresión.
        </p>

        <p className="font-semibold mb-2">Datos Sensibles:</p>
        <p className="mb-4">
          Datos que afectan la intimidad del titular o cuyo uso indebido puede
          generar su discriminación, tales como aquellos que revelen el origen
          racial o étnico, orientación política, convicciones religiosas o
          filosóficas, entre otros.
        </p>

        <p className="font-semibold mb-2">Encargado del Tratamiento:</p>
        <p className="mb-4">
          Persona natural o jurídica, pública o privada, que realiza el
          tratamiento de datos personales por cuenta del responsable del
          tratamiento.
        </p>

        <p className="font-semibold mb-2">Responsable del Tratamiento:</p>
        <p className="mb-4">
          Persona natural o jurídica, pública o privada, que decide sobre la
          base de datos y/o el tratamiento de los datos.
        </p>

        <p className="font-semibold mb-2">Titular:</p>
        <p className="mb-4">
          Persona natural cuyos datos personales sean objeto de tratamiento.
        </p>

        <p className="font-semibold mb-2">Aviso de Privacidad:</p>
        <p className="mb-4">
          Comunicación generada por el responsable para informar al titular
          sobre la existencia de las políticas de tratamiento de datos, su
          acceso y finalidades.
        </p>

        <p className="font-semibold mb-2">Transferencia:</p>
        <p className="mb-4">
          La transferencia de datos ocurre cuando el responsable del tratamiento
          envía la información a un receptor que puede estar dentro o fuera del
          país.
        </p>

        <p className="mb-4">
          No será necesaria la autorización del titular en los siguientes casos:
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>Información requerida por entidades públicas o judiciales.</li>
          <li>Datos de naturaleza pública.</li>
          <li>Casos de urgencia médica o sanitaria.</li>
          <li>
            Tratamiento autorizado por la ley para fines históricos,
            estadísticos o científicos.
          </li>
        </ul>

        <p>
          <strong>ALKOLOR</strong>, en el desarrollo de su actividad
          empresarial, lleva a cabo el tratamiento de datos personales en
          cumplimiento con la Constitución y las leyes aplicables.
        </p>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;
