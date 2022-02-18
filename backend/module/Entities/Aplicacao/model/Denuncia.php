<?php
namespace Reddit\Aplicacao\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Denuncia")
*/
class Denuncia
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    private $id_denuncia;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Aplicacao\Model\MotivoDenuncia", inversedBy="id_denuncia")
    * @ORM\JoinColumn(name="id_motivo", referencedColumnName="id_motivo", nullable=false)
    */
    private $id_motivo;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Usuario\model\Usuario", inversedBy="id_denuncia")
    * @ORM\JoinColumn(name="id_usuario_denunciador", referencedColumnName="id_usuario", nullable=false)
    */
    private $id_usuario_denunciador;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Usuario\model\Usuario", inversedBy="id_denuncia")
    * @ORM\JoinColumn(name="id_usuario_denunciado", referencedColumnName="id_usuario", nullable=true)
    */
    private $id_usuario_denunciado;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Posts\Model\Post", inversedBy="id_denuncia")
    * @ORM\JoinColumn(name="id_post", referencedColumnName="id_post", nullable=true)
    */
    private $id_post;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Subreddit\Model\Subreddit", inversedBy="id_denuncia")
    * @ORM\JoinColumn(name="id_subreddit", referencedColumnName="id_subreddit", nullable=true)
    */
    private $id_subreddit;

    /**
    * @ORM\Column(type="string", length=200)
    *
    * @var string
    */
    private $obs;

    /**
     * Get idDenuncia.
     *
     * @return int
     */
    public function getIdDenuncia()
    {
        return $this->id_denuncia;
    }

    /**
     * Set obs.
     *
     * @param string $obs
     *
     * @return Denuncia
     */
    public function setObs($obs)
    {
        $this->obs = $obs;

        return $this;
    }

    /**
     * Get obs.
     *
     * @return string
     */
    public function getObs()
    {
        return $this->obs;
    }

    /**
     * Set idMotivo.
     *
     * @param \Reddit\Aplicacao\Model\MotivoDenuncia $idMotivo
     *
     * @return Denuncia
     */
    public function setIdMotivo(\Reddit\Aplicacao\Model\MotivoDenuncia $idMotivo)
    {
        $this->id_motivo = $idMotivo;

        return $this;
    }

    /**
     * Get idMotivo.
     *
     * @return \Reddit\Aplicacao\Model\MotivoDenuncia
     */
    public function getIdMotivo()
    {
        return $this->id_motivo;
    }

    /**
     * Set idUsuarioDenunciador.
     *
     * @param \Reddit\Usuario\model\Usuario $idUsuarioDenunciador
     *
     * @return Denuncia
     */
    public function setIdUsuarioDenunciador(\Reddit\Usuario\model\Usuario $idUsuarioDenunciador)
    {
        $this->id_usuario_denunciador = $idUsuarioDenunciador;

        return $this;
    }

    /**
     * Get idUsuarioDenunciador.
     *
     * @return \Reddit\Usuario\model\Usuario
     */
    public function getIdUsuarioDenunciador()
    {
        return $this->id_usuario_denunciador;
    }

    /**
     * Set idUsuarioDenunciado.
     *
     * @param \Reddit\Usuario\model\Usuario|null $idUsuarioDenunciado
     *
     * @return Denuncia
     */
    public function setIdUsuarioDenunciado(\Reddit\Usuario\model\Usuario $idUsuarioDenunciado = null)
    {
        $this->id_usuario_denunciado = $idUsuarioDenunciado;

        return $this;
    }

    /**
     * Get idUsuarioDenunciado.
     *
     * @return \Reddit\Usuario\model\Usuario|null
     */
    public function getIdUsuarioDenunciado()
    {
        return $this->id_usuario_denunciado;
    }

    /**
     * Set idPost.
     *
     * @param \Reddit\Posts\Model\Post|null $idPost
     *
     * @return Denuncia
     */
    public function setIdPost(\Reddit\Posts\Model\Post $idPost = null)
    {
        $this->id_post = $idPost;

        return $this;
    }

    /**
     * Get idPost.
     *
     * @return \Reddit\Posts\Model\Post|null
     */
    public function getIdPost()
    {
        return $this->id_post;
    }

    /**
     * Set idSubreddit.
     *
     * @param \Reddit\Subreddit\Model\Subreddit|null $idSubreddit
     *
     * @return Denuncia
     */
    public function setIdSubreddit(\Reddit\Subreddit\Model\Subreddit $idSubreddit = null)
    {
        $this->id_subreddit = $idSubreddit;

        return $this;
    }

    /**
     * Get idSubreddit.
     *
     * @return \Reddit\Subreddit\Model\Subreddit|null
     */
    public function getIdSubreddit()
    {
        return $this->id_subreddit;
    }
}
