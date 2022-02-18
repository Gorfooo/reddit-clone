<?php
namespace Reddit\Aplicacao\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Motivo_Denuncia")
*/
class MotivoDenuncia
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    private $id_motivo;

    /**
    * @ORM\Column(type="string", length=40)
    *
    * @var string
    */
    private $descricao;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Aplicacao\Model\Denuncia", mappedBy="id_motivo")
    */
    private $denuncias;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->denuncias = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Get idMotivo.
     *
     * @return int
     */
    public function getIdMotivo()
    {
        return $this->id_motivo;
    }

    /**
     * Set descricao.
     *
     * @param string $descricao
     *
     * @return MotivoDenuncia
     */
    public function setDescricao($descricao)
    {
        $this->descricao = $descricao;

        return $this;
    }

    /**
     * Get descricao.
     *
     * @return string
     */
    public function getDescricao()
    {
        return $this->descricao;
    }

    /**
     * Add denuncia.
     *
     * @param \Reddit\Aplicacao\Model\Denuncia $denuncia
     *
     * @return MotivoDenuncia
     */
    public function addDenuncia(\Reddit\Aplicacao\Model\Denuncia $denuncia)
    {
        $this->denuncias[] = $denuncia;

        return $this;
    }

    /**
     * Remove denuncia.
     *
     * @param \Reddit\Aplicacao\Model\Denuncia $denuncia
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeDenuncia(\Reddit\Aplicacao\Model\Denuncia $denuncia)
    {
        return $this->denuncias->removeElement($denuncia);
    }

    /**
     * Get denuncias.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getDenuncias()
    {
        return $this->denuncias;
    }
}
