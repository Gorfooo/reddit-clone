<?php
namespace Reddit\Usuario\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Chat")
*/
class Chat
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    private $id_mensagem;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Usuario\model\Usuario", inversedBy="id_mensagem")
    * @ORM\JoinColumn(name="id_leitor", referencedColumnName="id_usuario", nullable=false)
    */
    private $id_leitor;


    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Usuario\model\Usuario", inversedBy="id_mensagem")
    * @ORM\JoinColumn(name="id_escritor", referencedColumnName="id_usuario", nullable=false)
    */
    private $id_escritor;

    /**
    * @ORM\Column(type="datetime")
    */
    private $data_hora;

    /**
    * @ORM\Column(type="text")
    */
    private $mensagem;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $lido;

    /**
     * Get idMensagem.
     *
     * @return int
     */
    public function getIdMensagem()
    {
        return $this->id_mensagem;
    }

    /**
     * Set dataHora.
     *
     * @param \DateTime $dataHora
     *
     * @return Chat
     */
    public function setDataHora($dataHora)
    {
        $this->data_hora = $dataHora;

        return $this;
    }

    /**
     * Get dataHora.
     *
     * @return \DateTime
     */
    public function getDataHora()
    {
        return $this->data_hora;
    }

    /**
     * Set mensagem.
     *
     * @param string $mensagem
     *
     * @return Chat
     */
    public function setMensagem($mensagem)
    {
        $this->mensagem = $mensagem;

        return $this;
    }

    /**
     * Get mensagem.
     *
     * @return string
     */
    public function getMensagem()
    {
        return $this->mensagem;
    }

    /**
     * Set lido.
     *
     * @param string $lido
     *
     * @return Chat
     */
    public function setLido($lido)
    {
        $this->lido = $lido;

        return $this;
    }

    /**
     * Get lido.
     *
     * @return string
     */
    public function getLido()
    {
        return $this->lido;
    }

    /**
     * Set idLeitor.
     *
     * @param \Reddit\Usuario\model\Usuario $idLeitor
     *
     * @return Chat
     */
    public function setIdLeitor(\Reddit\Usuario\model\Usuario $idLeitor)
    {
        $this->id_leitor = $idLeitor;

        return $this;
    }

    /**
     * Get idLeitor.
     *
     * @return \Reddit\Usuario\model\Usuario
     */
    public function getIdLeitor()
    {
        return $this->id_leitor;
    }

    /**
     * Set idEscritor.
     *
     * @param \Reddit\Usuario\model\Usuario $idEscritor
     *
     * @return Chat
     */
    public function setIdEscritor(\Reddit\Usuario\model\Usuario $idEscritor)
    {
        $this->id_escritor = $idEscritor;

        return $this;
    }

    /**
     * Get idEscritor.
     *
     * @return \Reddit\Usuario\model\Usuario
     */
    public function getIdEscritor()
    {
        return $this->id_escritor;
    }
}
